import dayjs from 'dayjs';
// deckLayer 타겟 스플릿
export const deckSplitCommonTarget = (splitData) => {
    return {
        TARGET_ID: splitData[0],
        ORIGINAL_TARGET_ID: splitData[37],
        RECV_DATE_TIME: splitData[1],
        SIGNAL_SOURCE_CODE: splitData[2],
        ORIGINAL_SIGNAL_SOURCE_CODE: splitData[2],
        COG: splitData[3],
        SOG: splitData[4],
        LONGITUDE: splitData[5],
        LATITUDE: splitData[6],
        SHIP_NAME: splitData[7],
        SHIP_TYPE: splitData[8],
        DIM_A: splitData[9],
        DIM_B: splitData[10],
        DIM_C: splitData[11],
        DIM_D: splitData[12],
        DEPARTMENT: splitData[13],
        ALTITUDE: splitData[14],
        VTS_CODE: splitData[15],
        LOST: splitData[16],
        HAZARDOUS_CATEGORY: splitData[17],
        PERMISSION: splitData[18],
        AIS: splitData[19],
        VPASS: splitData[20],
        ENAV: splitData[21],
        VTS_AIS: splitData[22],
        D_MF_HF: splitData[23],
        VTS_RADAR: splitData[24],
        NEAR_VTS_CODE: splitData[25],
        INTEGRATE: splitData[26],
        SIGNAL_KIND_CODE: splitData[27],
        DRAUGHT: splitData[28],
        IMO: splitData[29],
        IS_NON_PERMISSION: splitData[30],
        IS_ABROAD_GOV: splitData[31],
        IS_MMSI_CHANGED: splitData[32],
        IS_EEZ_CONTACTED: splitData[33],
        IS_NORTH_KOREA: splitData[34],
        NATIONAL_CODE: splitData[35],
        IS_PRIORITY: splitData[36],
    }
};


// *초전 신호 데이터인지 확인
export const isPrevDateWithSeconds = (featureDate, seconds = 60) => {
    const now = dayjs();
    const prevTime = dayjs(featureDate).format('YYYYMMDDHHmmss');
    const diffTime = now.diff(prevTime, 'second');
    return diffTime > seconds;
};


// *분전 신호 데이터인지 확인
export const isPrevDateWithMinutes = (featureDate, minutes = 12) => {
  const now = dayjs();
  const prevTime = dayjs(featureDate).format('YYYYMMDDHHmmss');
  const diffTime = now.diff(prevTime, 'minutes');
  return diffTime > minutes;
};