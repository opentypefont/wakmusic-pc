import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import { ChartsType, fetchCharts, fetchChartsUpdateTypes } from "@apis/charts";

import FunctionSection from "@components/globals/FunctionSection";
import GuideBar, { GuideBarFeature } from "@components/globals/GuideBar";
import SongItem, { SongItemFeature } from "@components/globals/SongItem";
import UpdatedText from "@components/globals/UpdatedText";
import MusicController from "@components/globals/musicControllers/MusicController";

import PageContainer from "@layouts/PageContainer";
import PageItemContainer from "@layouts/PageItemContainer";
import PageLayout from "@layouts/PageLayout";
import VirtualItem from "@layouts/VirtualItem";

import { chartTabs } from "@constants/tabs";
import { lastTextMap } from "@constants/textMap";

import { usePlaySongs } from "@hooks/player";
import { useScrollToTop } from "@hooks/scrollToTop";
import { useSelectSongs } from "@hooks/selectSongs";
import useVirtualizer from "@hooks/virtualizer";

interface ChartProps {}

const Chart = ({}: ChartProps) => {
  const [searchParams] = useSearchParams();
  const { selected, setSelected, selectCallback } = useSelectSongs();
  const tab = useMemo(
    () => (searchParams.get("type") ?? "hourly") as ChartsType,
    [searchParams]
  );

  const playSongs = usePlaySongs();

  const {
    isLoading: chartsIsLoading,
    error: chartsError,
    data: charts,
  } = useQuery({
    queryKey: ["charts", tab],
    queryFn: async () => await fetchCharts(tab, 100),
  });

  const {
    isLoading: chartUpdatedIsLoading,
    error: chartUpdatedError,
    data: chartUpdated,
  } = useQuery({
    queryKey: ["chartUpdated", tab],
    queryFn: async () => await fetchChartsUpdateTypes(tab),
  });

  const { viewportRef, getTotalSize, virtualMap } = useVirtualizer(
    charts ?? []
  );

  useScrollToTop(tab, viewportRef, setSelected);

  // TODO
  if (chartsIsLoading || chartUpdatedIsLoading || !charts || !chartUpdated)
    return <div>로딩중...</div>;
  if (chartsError || chartUpdatedError) return <div>에러...</div>;

  return (
    <PageLayout>
      <PageContainer>
        <FunctionSection
          tabs={chartTabs}
          play={(shuffle) => {
            playSongs(charts, shuffle);
          }}
        />

        <UpdatedText updated={chartUpdated} marginTop={12} marginLeft={20} />

        <GuideBar
          lastText={tab !== "total" ? lastTextMap[tab] : undefined}
          features={[
            GuideBarFeature.rank,
            GuideBarFeature.info,
            tab !== "total" ? GuideBarFeature.last : undefined,
            GuideBarFeature.date,
            GuideBarFeature.views,
          ]}
        />

        <PageItemContainer
          height={209}
          ref={viewportRef}
          totalSize={getTotalSize()}
        >
          {virtualMap((virtualItem, item) => (
            <VirtualItem virtualItem={virtualItem} key={virtualItem.key}>
              <SongItem
                rank={virtualItem.index + 1}
                song={item}
                selected={selected.includes(item)}
                features={[
                  tab !== "total" ? SongItemFeature.last : undefined,
                  SongItemFeature.date,
                  SongItemFeature.views,
                ]}
                onClick={selectCallback}
                useIncrease={tab !== "total"}
              />
            </VirtualItem>
          ))}
        </PageItemContainer>

        <MusicController
          songs={charts ?? []}
          selectedSongs={selected}
          dispatchSelectedSongs={selectCallback}
        />
      </PageContainer>
    </PageLayout>
  );
};

export default Chart;
