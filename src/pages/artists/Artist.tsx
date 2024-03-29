import { useAnimation } from "framer-motion";
import throttle from "lodash.throttle";
import { useEffect, useMemo, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components/macro";

import { fetchArtistAlbums, fetchArtistList } from "@apis/artist";

import { ReactComponent as PlayAllSVG } from "@assets/icons/ic_24_play_all.svg";
import { ReactComponent as RandomSVG } from "@assets/icons/ic_24_random_900.svg";

import ArtistInfo from "@components/artists/ArtistInfo";
import GuideBar, { GuideBarFeature } from "@components/globals/GuideBar";
import IconButton from "@components/globals/IconButton";
import SongItem from "@components/globals/SongItem";
import Spinner from "@components/globals/Spinner";
import Tab from "@components/globals/Tab";
import TabBar from "@components/globals/TabBar";
import MusicController from "@components/globals/musicControllers/MusicController";

import PageContainer from "@layouts/PageContainer";
import PageItemContainer from "@layouts/PageItemContainer";
import PageLayout from "@layouts/PageLayout";
import VirtualItem from "@layouts/VirtualItem";

import { artistDetailTabs } from "@constants/tabs";

import { useInfiniteScrollHandler } from "@hooks/infiniteScrollHandler";
import { usePlaySongs } from "@hooks/player";
import { useScrollToTop } from "@hooks/scrollToTop";
import { useSelectSongs } from "@hooks/selectSongs";
import useVirtualizer from "@hooks/virtualizer";

import { Song, SongSortType } from "@templates/song";
import { SongItemFeature } from "@templates/songItem";

interface ArtistProps {}

const Artist = ({}: ArtistProps) => {
  const { selected, setSelected, selectCallback, selectedIncludes } =
    useSelectSongs();
  const [searchParams] = useSearchParams();
  const tab = (searchParams.get("tab") as SongSortType) ?? "new";

  const controls = useAnimation();

  const [scroll, setScroll] = useState(0);
  const [animationState, setAnimationState] = useState<"round" | "square">(
    "square"
  );

  const playSongs = usePlaySongs();

  const location = useLocation();
  const artistId = useMemo(
    () => decodeURI(location.pathname.split("/")[2]),
    [location.pathname]
  );

  const {
    isLoading: artistsIsLoading,
    error: artistsError,
    data: artists,
  } = useQuery({
    queryKey: "artists",
    queryFn: fetchArtistList,
  });

  const {
    isFetching: albumsIsLoading,
    error: albumsError,
    data: albumsData,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<Song[]>({
    queryKey: ["artistsAlbums", tab, artistId],
    queryFn: async ({ pageParam = 0 }) => {
      if (!artistId || !tab) return [];

      return await fetchArtistAlbums(artistId, tab, pageParam);
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;

      return allPages.flat().length;
    },
  });

  const artist = useMemo(
    () => artists?.find((artist) => artist.artistId === artistId),
    [artists, artistId]
  );

  const albums = useMemo(() => {
    if (albumsIsLoading && !isFetchingNextPage) return Array(50).fill(null);
    if (!albumsData) return [];

    return albumsData.pages.flat();
  }, [albumsData, albumsIsLoading, isFetchingNextPage]);

  const { viewportRef, getTotalSize, virtualMap, getVirtualItems } =
    useVirtualizer(albums ?? [], {
      hasNextPage,
    });

  useScrollToTop(tab, viewportRef, setSelected);
  useInfiniteScrollHandler({
    items: albums,
    hasNextPage,
    fetchNextPage,
    getVirtualItems,
    isFetchingNextPage,
  });

  useEffect(() => {
    if (scroll > 0 && animationState === "square") {
      controls.start("round");
      setAnimationState("round");
    }

    if (scroll === 0 && animationState === "round") {
      controls.start("square");
      setAnimationState("square");
    }
  }, [animationState, controls, scroll]);

  const scrollToTop = () => {
    viewportRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // TODO: 스켈레톤, 오류
  if (artistsError || albumsError) return <div>에러 발생!</div>;

  return (
    <PageLayout>
      <PageContainer>
        <ArtistInfo
          artist={artist}
          controls={controls}
          small={scroll > 0}
          isLoading={artistsIsLoading}
          scrollToTop={scrollToTop}
        />

        <TabBarWrapper>
          <TabBar>
            {artistDetailTabs.map((item, index) => (
              <Tab to={item.to} key={index}>
                {item.text}
              </Tab>
            ))}
          </TabBar>

          <ButtonLayout>
            <IconButton icon={PlayAllSVG} onClick={() => playSongs(albums)}>
              전체재생
            </IconButton>
            <IconButton
              icon={RandomSVG}
              onClick={() => playSongs(albums, true)}
            >
              랜덤재생
            </IconButton>
          </ButtonLayout>
        </TabBarWrapper>

        <GuideBar
          features={[
            GuideBarFeature.info,
            GuideBarFeature.date,
            GuideBarFeature.views,
            GuideBarFeature.like,
          ]}
        />

        <PageItemContainer
          height={273}
          ref={viewportRef}
          totalSize={getTotalSize()}
          onScroll={throttle((e) => {
            const { scrollTop } = e.target as HTMLDivElement;
            setScroll(scrollTop);
          })}
        >
          {virtualMap((virtualItem, item) => {
            const isLoader = virtualItem.index > albums.length - 1;

            return (
              <VirtualItem virtualItem={virtualItem} key={virtualItem.key}>
                {isLoader ? (
                  <Spinner />
                ) : (
                  <SongItem
                    song={item}
                    index={virtualItem.index}
                    selected={selectedIncludes(item, virtualItem.index)}
                    features={[
                      SongItemFeature.date,
                      SongItemFeature.views,
                      SongItemFeature.like,
                    ]}
                    onClick={selectCallback}
                    isLoading={albumsIsLoading && !isFetchingNextPage}
                  />
                )}
              </VirtualItem>
            );
          })}
        </PageItemContainer>

        <MusicController
          songs={albums}
          selectedSongs={selected}
          dispatchSelectedSongs={selectCallback}
        />
      </PageContainer>
    </PageLayout>
  );
};

const TabBarWrapper = styled.div`
  margin: 16px 20px 0 20px;

  display: flex;
`;

const ButtonLayout = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export default Artist;
