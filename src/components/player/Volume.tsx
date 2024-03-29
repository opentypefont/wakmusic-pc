import { MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";

import { ReactComponent as SoundOffActivateSvg } from "@assets/icons/ic_20_sound_off_activate.svg";
import { ReactComponent as SoundOffDefaultSvg } from "@assets/icons/ic_20_sound_off_default.svg";
import { ReactComponent as SoundOn50ActivateSvg } from "@assets/icons/ic_20_sound_on_50_activate.svg";
import { ReactComponent as SoundOn50DefaultSvg } from "@assets/icons/ic_20_sound_on_50_default.svg";
import { ReactComponent as SoundOn100ActivateSvg } from "@assets/icons/ic_20_sound_on_100_activate.svg";
import { ReactComponent as SoundOn100DefaultSvg } from "@assets/icons/ic_20_sound_on_100_default.svg";
import { ReactComponent as VolumeSvg } from "@assets/svgs/volume.svg";

import { T8Medium } from "@components/Typography";
import SimpleIconButton from "@components/globals/SimpleIconButton";

import colors from "@constants/colors";

interface VolumeProps {
  volume: number;
  isMute: boolean;
  onChange: (volume: number, isMute: boolean) => void;
}

const Volume = ({ volume, isMute, onChange }: VolumeProps) => {
  const [isChanging, setIsChanging] = useState(false);
  const [prvVolume, setPrvVolume] = useState(50);

  const [isHover, setIsHover] = useState(false);
  const [isActivate, setIsActivate] = useState(false);

  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);

  function onClick() {
    if (isActivate) {
      onChange(volume, !isMute);
    } else {
      setIsActivate(true);
    }
  }

  function onHandleMouseUp() {
    setIsChanging(false);
  }

  function onContainerMouseUp(e: MouseEvent) {
    e.stopPropagation();
  }

  function handleGlobalMouseUp() {
    setIsActivate(false);
  }

  function onValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);

    if (!isChanging) {
      setIsChanging(true);
      setPrvVolume(volume);
    }

    if (value === 0) {
      onChange(prvVolume, true);
    } else {
      onChange(value, false);
    }

    updateIndicatorPosition(value);
  }

  function updateIndicatorPosition(value: number) {
    if (!sliderRef?.current) {
      return;
    }

    // 양쪽으로 slider thumb의 width 절반만큼씩 빼기
    setIndicatorPosition((sliderRef.current.clientWidth - 12) * (value / 100));
  }

  function getVolumeIcon() {
    const activate = isHover || isActivate;

    if (isMute || volume === 0) {
      return activate ? SoundOffActivateSvg : SoundOffDefaultSvg;
    }

    if (volume < 50) {
      return activate ? SoundOn50ActivateSvg : SoundOn50DefaultSvg;
    }

    return activate ? SoundOn100ActivateSvg : SoundOn100DefaultSvg;
  }

  useEffect(() => {
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return (
    <Container onMouseUp={onContainerMouseUp}>
      <IconWrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <SimpleIconButton icon={getVolumeIcon()} onClick={onClick} />
      </IconWrapper>
      <Popover $activate={isActivate}>
        <VolumeSvg />
        <Input
          type="range"
          min={0}
          max={100}
          value={isMute ? 0 : volume}
          onChange={onValueChange}
          onInput={onValueChange}
          onMouseUp={onHandleMouseUp}
          ref={sliderRef}
        />
        <VolumeIndicator $visible={isChanging} $left={indicatorPosition}>
          <T8Medium>{isMute ? 0 : volume}</T8Medium>
        </VolumeIndicator>
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-items: center;
  align-items: center;
`;

const Popover = styled.div<{ $activate: boolean }>`
  position: absolute;
  transform: translateY(-100%);

  align-items: center;
  justify-content: center;

  display: ${({ $activate }) => ($activate ? "inherit" : "none")};
`;

const IconWrapper = styled.div``;

const Input = styled.input<{ value: number }>`
  position: absolute;
  width: 104px;

  top: calc(50% - 3px);

  appearance: none;

  background: linear-gradient(
    to right,
    ${colors.blueGray25} 0%,
    ${colors.blueGray25} ${({ value }) => value}%,
    rgba(255, 255, 255, 0.4) ${({ value }) => value}%,
    rgba(255, 255, 255, 0.4) 100%
  );

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    height: 12px;
    width: 12px;

    margin-top: -5px;
    border-radius: 50%;

    -webkit-appearance: none;

    cursor: pointer;
    background: ${colors.blueGray25};
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;

    -webkit-appearance: none;

    cursor: pointer;
  }
`;

const VolumeIndicator = styled.div<{ $visible: boolean; $left: number }>`
  height: 18px;
  width: 24px;

  position: absolute;
  top: -16px;

  // left + (padding - (width / 2) + (sliderWidth / 2))
  left: ${({ $left }) => $left + 2}px;

  align-items: center;
  justify-content: center;

  display: ${({ $visible }) => ($visible ? "inherit" : "none")};

  border-radius: 4px;

  background-color: ${colors.gray400};
  color: ${colors.gray900};
`;

export default Volume;
