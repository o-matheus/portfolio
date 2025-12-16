import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables";

const scroll = keyframes`
    from {transform: translateX(0);}
    to {transform: translateX(-50%);}
`;

export const BannerWrapper = styled.div`
display: block;
  width: max-content;
  overflow: hidden;
  background: transparent;
  box-sizing: border-box;
  padding: 12px 0;

  @media (max-width: 768px) {
    width: max-content;
  }
`;

export const Slider = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  animation: ${scroll} 20s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 768px) {
    gap: 16px;
    animation-duration: 15s;
  }
`;

export const Track = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  padding-right: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const TrackItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  white-space: normal;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

export const TechIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: block;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const TechLabel = styled.span`
  color: ${colors.corSubTitle};
  font-size: 14px;
`;
