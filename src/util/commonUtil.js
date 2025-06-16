
import {
  SIGNAL_SOURCE_CODE_D_MF_HF,
  SIGNAL_SOURCE_CODE_ENAV,
  SIGNAL_SOURCE_CODE_VPASS,
} from '@/types/constants.js';

const getSplitIntegrationIdObject = (targetId) => {
  const splitId = targetId.split('_');
  return {
    aisTargetId: splitId[0],
    enavTargetId: splitId[1],
    vpassTargetId: splitId[2],
    vtsAisTargetId: splitId[3],
    dMfHfTargetId: splitId[4],
  };
};

// 국가 필터
export const checkDeckNationFilter = (feature) => {
  const targetId = feature[0];
  const signalSourceCode = feature[2];
  const isIntegrate = feature[26] === '1';

  if (isDeckKoreaFeature(signalSourceCode, feature, targetId, isIntegrate))
    return true;
  if (isDeckChinaFeature(targetId, isIntegrate)) return true;
  if (isDeckJapanFeature(targetId, isIntegrate)) return true;
  if (isDeckNorthKoreaFeature(targetId, isIntegrate)) return true;

  return true;
};

// 한국 선박 조회
const isDeckKoreaFeature = (
  signalSourceCode,
  feature,
  targetId,
  isIntegrated,
) => {
  if (isIntegrated && targetId.includes('_')) {
    const splitTargetId = getSplitIntegrationIdObject(targetId);

    if (
      splitTargetId.vpassTargetId ||
      splitTargetId.enavTargetId ||
      splitTargetId.dMfHfTargetId ||
      splitTargetId.aisTargetId.startsWith('440') ||
      splitTargetId.vtsAisTargetId?.startsWith('440') ||
      splitTargetId.aisTargetId.startsWith('441') ||
      splitTargetId.vtsAisTargetId?.startsWith('441') ||
      splitTargetId.aisTargetId.startsWith('###') ||
      splitTargetId.vtsAisTargetId?.startsWith('###')
    )
      return true;
  }

  return !!(
    signalSourceCode === SIGNAL_SOURCE_CODE_VPASS ||
    feature[20] ||
    signalSourceCode === SIGNAL_SOURCE_CODE_ENAV ||
    feature[21] ||
    signalSourceCode === SIGNAL_SOURCE_CODE_D_MF_HF ||
    feature[23] ||
    targetId.startsWith('440') ||
    targetId.startsWith('441') ||
    targetId.startsWith('###')
  );
};

// 중국 선박 조회
const isDeckChinaFeature = (targetId, isIntegrate) => {
  if (isIntegrate && targetId.includes('_')) {
    const splitTargetId = getSplitIntegrationIdObject(targetId);

    if (
      splitTargetId.aisTargetId.startsWith('412') ||
      splitTargetId.vtsAisTargetId.startsWith('412') ||
      splitTargetId.aisTargetId.startsWith('413') ||
      splitTargetId.vtsAisTargetId.startsWith('413')
    )
      return true;
  }

  return targetId.startsWith('412') || targetId.startsWith('413');
};

// 일본 선박 조회
const isDeckJapanFeature = (targetId, isIntegrate) => {
  if (isIntegrate && targetId.includes('_')) {
    const splitTargetId = getSplitIntegrationIdObject(targetId);

    if (
      splitTargetId.aisTargetId?.startsWith('431') ||
      splitTargetId.vtsAisTargetId?.startsWith('431') ||
      splitTargetId.aisTargetId?.startsWith('432') ||
      splitTargetId.vtsAisTargetId?.startsWith('432')
    )
      return true;
  }

  return targetId.startsWith('431') || targetId.startsWith('432');
};

// 북한 선박 조회
const isDeckNorthKoreaFeature = (targetId, isIntegrate) => {
  if (isIntegrate && targetId.includes('_')) {
    const splitTargetId = getSplitIntegrationIdObject(targetId);

    if (splitTargetId.aisTargetId?.startsWith('445') || splitTargetId.vtsAisTargetId?.startsWith('445')) return true;
  }
  return targetId.startsWith('445');
};