/* 해경자산 이미지 */
import kcgvAssetImg from '@/assets/img/mainGis/ship_asset_img.svg';
import fixedAssetImg from '@/assets/img/mainGis/fixed_asset_img.svg';
/* 선종 위험물 이미지 */
import fishingHazardImg from '@/assets/img/mainGis/map/fishingHazard.svg';
import kcgvHazardImg from '@/assets/img/mainGis/map/kcgvHazard.svg';
import passHazardImg from '@/assets/img/mainGis/map/passHazard.svg';
import cargoHazardImg from '@/assets/img/mainGis/map/cargoHazard.svg';
import tankerHazardImg from '@/assets/img/mainGis/map/tankerHazard.svg';
import govHazardImg from '@/assets/img/mainGis/map/govHazard.svg';
import etcHazardImg from '@/assets/img/mainGis/map/etcHazard.svg';
/* 소실신호 이미지 */
import lostShipImg from '@/assets/img/mainGis/shipKindIcons/lost.svg';
/* AI 모드 이미지 */
import chinaPermissionFeatureImg from '@/assets/img/mainGis/map/chinaPermissionFeature.svg';
import eezContractFeatureImg from '@/assets/img/mainGis/map/eezContractFeature.svg';
import govShipFeatureImg from '@/assets/img/mainGis/map/govShipFeature.svg';
import blackBackgroundFeatureImg from '@/assets/img/mainGis/map/blackBackground.svg';
import chinaPermissionLabelImg from '@/assets/img/mainGis/map/chinaPermissionLabel.svg';
import nonPermissionLabelImg from '@/assets/img/mainGis/map/nonPermissionLabel.svg';
import eezContractLabelImg from '@/assets/img/mainGis/map/eezContractLabel.svg';
import govShipLabelImg from '@/assets/img/mainGis/map/govShipLabel.svg';
import northKoreaLabelImg from '@/assets/img/mainGis/map/northKorea.svg';
import mmsiChangeLabelImg from '@/assets/img/mainGis/map/mmsiChangeLabel.svg';
/* 선종 항해 이미지 */
import fishingImg from '@/assets/img/mainGis/shipKindIcons/fishing.svg';
import kcgvImg from '@/assets/img/mainGis/shipKindIcons/kcgv.svg';
import passImg from '@/assets/img/mainGis/shipKindIcons/pass.svg';
import cargoImg from '@/assets/img/mainGis/shipKindIcons/cargo.svg';
import hazardImg from '@/assets/img/mainGis/shipKindIcons/hazard.svg';
import govImg from '@/assets/img/mainGis/shipKindIcons/gov.svg';
import etcImg from '@/assets/img/mainGis/shipKindIcons/etc.svg';
import bouyImg from '@/assets/img/mainGis/shipKindIcons/bouy.svg';
import rotationAssetImg from '@/assets/img/mainGis/rotation_asset_img.svg';
/* 선종 정박 이미지 */
import fishingStopImg from '@/assets/img/mainGis/shipKindIcons/fishing_s.svg';
import kcgvStopImg from '@/assets/img/mainGis/shipKindIcons/kcgv_s.svg';
import passStopImg from '@/assets/img/mainGis/shipKindIcons/pass_s.svg';
import cargoStopImg from '@/assets/img/mainGis/shipKindIcons/cargo_s.svg';
import hazardStopImg from '@/assets/img/mainGis/shipKindIcons/hazard_s.svg';
import govStopImg from '@/assets/img/mainGis/shipKindIcons/gov_s.svg';
import etcStopImg from '@/assets/img/mainGis/shipKindIcons/etc_s.svg';

/* -------------------------------------- 실시간, AI 모드 레이어 관련 --------------------------------------*/

export const ICON_MAPPING_KIND_MOVING = {
    '000020': fishingImg,
    '000021': kcgvImg,
    '000022': passImg,
    '000023': cargoImg,
    '000024': hazardImg,
    '000025': govImg,
    '000027': etcImg,
    '000028': bouyImg,
};

export const ICON_MAPPING_KIND_STOPPING = {
    '000020': fishingStopImg,
    '000021': kcgvStopImg,
    '000022': passStopImg,
    '000023': cargoStopImg,
    '000024': hazardStopImg,
    '000025': govStopImg,
    '000027': etcStopImg,
    '000028': bouyImg,
};

export const ICON_ASSET = {
    kcgv: kcgvAssetImg,
    fixed: fixedAssetImg,
    rotation: rotationAssetImg,
};

export const ICON_LOST = lostShipImg;

export const ICON_HAZARDOUS = {
    '000020': fishingHazardImg,
    '000021': kcgvHazardImg,
    '000022': passHazardImg,
    '000023': cargoHazardImg,
    '000024': tankerHazardImg,
    '000025': govHazardImg,
    '000027': etcHazardImg,
};

export const ICON_AI_TARGET = {
    permission: chinaPermissionFeatureImg,
    '000030': blackBackgroundFeatureImg, // 비허가 선박
    '000031': eezContractFeatureImg, // 비정상 접촉
    '000032': govShipFeatureImg, // 관공선
    '000033': govShipFeatureImg, // 북한 선박
    '000076': blackBackgroundFeatureImg, // mmsi 변조
};

export const ICON_AI_LABEL = {
    permission: chinaPermissionLabelImg,
    '000030': nonPermissionLabelImg,
    '000031': eezContractLabelImg,
    '000032': govShipLabelImg,
    '000033': northKoreaLabelImg,
    '000076': mmsiChangeLabelImg,
};

// AI 모드 아이콘 split
export const ICON_MAPPING_AI = {
    SSE_ZONE_COTRACT: { x: 0, y: 0, width: 160, height: 90 },
    GOV_SHIP: { x: 160, y: 0, width: 160, height: 90 },
    NORTH_KOREA_AI: { x: 320, y: 0, width: 160, height: 90 },
    NON_PERMISSION: { x: 320, y: 90, width: 160, height: 90 },
    CHINA_PERMISSION: { x: 0, y: 90, width: 160, height: 90 },
    MMSI_CHANGE: { x: 160, y: 90, width: 160, height: 90 },
};

/* ------------------------------------------------------------------------------------------------------*/

export const EPSG_3857 = 'EPSG:3857'; // 오픈스트리트맵에서 사용하는 좌표계 - 투영 좌표계
export const EPSG_4326 = 'EPSG:4326'; // GPS가 사용하는 좌표계 - 지리적 좌표계

export const FISHING = 'FISHING';
export const KCGV = 'KCGV';
export const PASSENGER = 'PASSENGER';
export const CARGO = 'CARGO';
export const TANKER = 'TANKER';
export const GOV = 'GOV';
export const NORMAL = 'NORMAL';

// 위험물
export const HAZARD = 'HAZARD';
// 조난 신호
export const SOS_MESSAGE = 'SOS_MESSAGE';
// 소실 신호, 영해 밖 = 1, 안 = 0
export const LOST_SIGNAL_CODE = 'LOST';
// 소실 신호, 영해 밖 = 1, 안 = 0
export const LOST_SIGNAL = '1';
export const AIS = 'AIS';
export const VPASS = 'VPASS';
export const ENAV = 'ENAV';
export const VTS_RADAR = 'VTS_RADAR';
export const VTS_AIS = 'VTS_AIS';
export const D_MF_HF = 'D_MF_HF';
export const INTEGRATE = 'INTEGRATE';
export const TEST = 'test';
export const AIS_INTEGRATE = 'AIS';
export const VPASS_INTEGRATE = 'VPASS';
export const ENAV_INTEGRATE = 'ENAV';
export const VTS_AIS_INTEGRATE = 'VTS_AIS';
export const D_MF_HF_INTEGRATE = 'D_MF_HF';
export const SAR_AIRCRAFT = 'SAR_AIRCRAFT';

export const SIGNAL_SOURCE_CODE_INTEGRATE = '000000';
export const SIGNAL_SOURCE_CODE_AIS = '000001';
export const SIGNAL_SOURCE_CODE_ENAV = '000002';
export const SIGNAL_SOURCE_CODE_VPASS = '000003';
export const SIGNAL_SOURCE_CODE_VTS_AIS = '000004';
export const SIGNAL_SOURCE_CODE_RADAR = '000005';
export const SIGNAL_SOURCE_CODE_D_MF_HF = '000016';

export const SIGNAL_KIND_CODE_FISHING = '000020'; // 어선
export const SIGNAL_KIND_CODE_KCGV = '000021'; // 경비 함정
export const SIGNAL_KIND_CODE_PASS = '000022'; // 여객선
export const SIGNAL_KIND_CODE_CARGO = '000023'; // 화물선
export const SIGNAL_KIND_CODE_TANKER = '000024'; // 유조선
export const SIGNAL_KIND_CODE_GOV = '000025'; // 관공선
export const SIGNAL_KIND_CODE_NORMAL = '000027'; // 기타
export const SIGNAL_KIND_CODE_BUOY = '000028'; // 어망/부이
export const SIGNAL_KIND_CODE_SAR_AIRCRAFT = '000019'; // 항공기

export const IS_SHIP_HOVER = 'IS_SHIP_HOVER';

export const TARGET = 'TARGET';
export const LABEL = 'LABEL';

export const NATION = {
    KOREA: 'KOREA' ,
    CHINA: 'CHINA' ,
    JAPAN: 'JAPAN' ,
    NORTH_KOREA: 'NORTH_KOREA' ,
    ETC: 'ETC' ,
};

// AI 필터 모드
export const AI_MODE_FILTER = {
    MMSI_CHANGE: 'MMSI_CHANGE' ,
    CHINA_PERMISSION: 'CHINA_PERMISSION' ,
    GOV_SHIP: 'GOV_SHIP' ,
    SSE_ZONE_COTRACT: 'SSE_ZONE_COTRACT' ,
    NON_PERMISSION: 'NON_PERMISSION' ,
    NORTH_KOREA_AI: 'NORTH_KOREA_AI' ,
};

export const COMMON_FEATURE_KEY = {
    ORIGINAL_TARGET_ID: 'ORIGINAL_TARGET_ID',
    TARGET_ID: 'TARGET_ID',
    RECV_DATE_TIME: 'RECV_DATE_TIME',
    SIGNAL_SOURCE_CODE: 'SIGNAL_SOURCE_CODE',
    ORIGINAL_SIGNAL_SOURCE_CODE: 'ORIGINAL_SIGNAL_SOURCE_CODE',
    COG: 'COG',
    SOG: 'SOG',
    LONGITUDE: 'LONGITUDE',
    LATITUDE: 'LATITUDE',
    SHIP_NAME: 'SHIP_NAME',
    SHIP_TYPE: 'SHIP_TYPE',
    DIMA: 'DIMA',
    DIMB: 'DIMB',
    DIMC: 'DIMC',
    DIMD: 'DIMD',
    ETA: 'ETA',
    DESTINATION: 'DESTINATION',
    DTE: 'DTE',
    // AIS 항공기 부서명
    DEPARTMENT: 'DEPARTMENT',
    // AIS 항공기 고도
    ALTITUDE: 'ALTITUDE',
    VTS_CODE: 'VTS_CODE',
    LOST: 'LOST',
    HAZARDOUS_CATEGORY: 'HAZARDOUS_CATEGORY',
    PERMISSION: 'PERMISSION',
    AIS: 'AIS',
    VPASS: 'VPASS',
    ENAV: 'ENAV',
    VTS_AIS: 'VTS_AIS',
    D_MF_HF: 'D_MF_HF',
    VTS_RADAR: 'VTS_RADAR',
    NEAR_VTS_CODE: 'NEAR_VTS_CODE',
    INTEGRATE: 'INTEGRATE',
    AIS_DEPARTURE: 'AIS_DEPARTURE',
    AIS_ARRIVAL: 'AIS_ARRIVAL',
    // 선종, 기종
    SIGNAL_KIND_CODE: 'SIGNAL_KIND_CODE',
    // 흘수
    DRAUGHT: 'DRAUGHT',
    IS_MOVE: 'IS_MOVE',
    LAYER_TYPE: 'LAYER_TYPE',
    // 선종, 기종
    SIGNAL_KIND_NAME: 'SIGNAL_KIND_NAME',
    // 지도상에 보여지고 있는 지 여부
    IS_STYLED: 'IS_STYLED',
    // 선박 상세 모달 오픈 여부
    MODAL_OPEN: 'MODAL_OPEN',
    IMO: 'IMO',
    IS_NON_PERMISSION: 'IS_NON_PERMISSION',
    IS_ABROAD_GOV: 'IS_ABROAD_GOV',
    IS_MMSI_CHANGED: 'IS_MMSI_CHANGED',
    IS_EEZ_CONTACTED: 'IS_EEZ_CONTACTED',
    IS_NORTH_KOREA: 'IS_NORTH_KOREA',
    NATIONAL_CODE: 'NATIONAL_CODE',
    IS_PRIORITY: 'IS_PRIORITY',
};

export const AIS_FEATURE_KEY = {
    DIMA: 'DIMA',
    DIMB: 'DIMB',
    DIMC: 'DIMC',
    DIMD: 'DIMD',
    EPFD: 'EPFD',
    ETA: 'ETA',
    DESTINATION: 'DESTINATION',
    ROT: 'ROT',
    HEADING: 'HEADING',
    MODE: 'MODE',
    POSACC: 'POSACC',
    SIGNAL_SRC: 'SIGNAL_SRC',
};

export const SAR_AIRCRAFT_FEATURE_KEY = {
    ALTITUDE: 'ALTITUDE',
    POSACC: 'POSACC',
    NAVI_STATUS: 'NAVI_STATUS',
    DEPARTMENT: 'DEPARTMENT',
    SAR_AIRCRAFT_NAME: 'SAR_AIRCRAFT_NAME',
    SAR_FIXED: 'SAR-FIXED', // 고정익 항공기
    SAR_ROTRY: 'SAR-ROTRY', // 회전익 헬기
};

export const WAKE_KEY = {
    TIME: 'TIME',
};

// sos 조난 신호 피쳐 키
export const SOS_FEATURE_KEY = {
    SOS_NUMBER: 'SOS_NUMBER',
    SOS_CONTENT: 'SOS_CONTENT',
    SOS_EVENT_TIME: 'SOS_EVENT_TIME',
    SOS_MESSAGE: 'SOS_MESSAGE',
};

// 소실 신호 피쳐 키
export const LOST_FEATURE_KEY = {
    LOST_MESSAGE: 'LOST_MESSAGE',
    IS_LOST: 'IS_LOST',
};

// 라이브맵 필터 메시지 분류 (mmsi 변조,관공선 해역 진입,소실신호)
export const LIVE_MAP_FILTER_KEY = {
    SSE_ALRM_TYPE: 'SSE_ALRM_TYPE',
    FILTER_LONGITUDE: 'FILTER_LONGITUDE',
    FILTER_LATITUDE: 'FILTER_LATITUDE',
    EEZ_NUMBER: '0',
    EEZ_NEAR_TARGET_ID: 'EEZ_NEAR_TARGET_ID',
    FILTER_OBJECT_ID: 'FILTER_OBJECT_ID',
    IS_SSE: 'IS_SSE',
};

export const MARINE_ZONE_SM = {
    CLICK_TYPE: 'CLICK_TYPE',
};

export const AI_COMMON_FEATURE_KEY = {
    AI_TYPE: 'AI_TYPE',
    TARGET_IDX: 'TARGET_IDX',
    SHIP_NAME: 'SHIP_NAME',
    COLOR: 'COLOR',
    PAST_LON: 'PAST_LON',
    PAST_LAT: 'PAST_LAT',
    PAST_DATE: 'PAST_DATE',
    CUR_LON: 'CUR_LON',
    CUR_LAT: 'CUR_LAT',
    CUR_DATE: 'CUR_DATE',
    // EEZ_PERMIT: 'EEZ_PERMIT',
};

export const THREAT_POSITION_KEY = {
    THREAT_ID: 'THREAT_ID',
};

export const AI_DASHBOARD_DUPL_FEATURE_KEY = {
    AI_DUPL: 'AI_DUPL',
    AI_TITLE: 'AI_TITLE',
    DUPL_TARGET_IDX: 'DUPL_TARGET_IDX',
    DUPL_SHIP_NAME: 'DUPL_SHIP_NAME',
    COLOR: 'COLOR',
    DUPL_LON: 'DUPL_LON',
    DUPL_LAT: 'DUPL_LAT',
    DUPL_DATE: 'DUPL_DATE',
    ORIGIN_TOTAL: 'ORIGIN_TOTAL',
    ORIGIN_MAP_DATA: 'ORIGIN_MAP_DATA',
    ORIGIN_TARGET_IDX: 'ORIGIN_TARGET_IDX',
    ORIGIN_SHIP_NAME: 'ORIGIN_SHIP_NAME',
    ORIGIN_LON: 'ORIGIN_LON',
    ORIGIN_LAT: 'ORIGIN_LAT',
    ORIGIN_DATE: 'ORIGIN_DATE',
};

export const AI_DASHBOARD_PERMIT_FEATURE_KEY = {
    AI_TYPE: 'AI_TYPE',
    TARGET_IDX: 'TARGET_IDX',
    SHIP_NAME: 'SHIP_NAME',
    COLOR: 'COLOR',
    PAST_LON: 'PAST_LON',
    PAST_LAT: 'PAST_LAT',
    PAST_DATE: 'PAST_DATE',
    CUR_LON: 'CUR_LON',
    CUR_LAT: 'CUR_LAT',
    CUR_DATE: 'CUR_DATE',
    EEZ_PERMIT: 'EEZ_PERMIT',
    PERMIT_DETAIL_FISHING_AREA: 'PERMIT_DETAIL_FISHING_AREA',
    PERMIT_DETAIL_FISHING_PERIOD_1: 'PERMIT_DETAIL_FISHING_PERIOD_1',
    PERMIT_DETAIL_FISHING_PERIOD_2: 'PERMIT_DETAIL_FISHING_PERIOD_2',
    PERMIT_DETAIL_FISHING_TYPE: 'PERMIT_DETAIL_FISHING_TYPE',
    PERMIT_DETAIL_PERMIT_NO: 'PERMIT_DETAIL_PERMIT_NO',
    PERMIT_DETAIL_SHIPNAME: 'PERMIT_DETAIL_SHIPNAME',
};

export const KCG_WATCH_ZONE_FEATURE_KEY = {
    KCG_WATCH_ZONE: 'KCG_WATCH_ZONE',
    KCG_WATCH_ZONE_GIS_ID: 'KCG_WATCH_ZONE_GIS_ID',
};

export const HIDE_TIDE_OBS_FEATURE_KEY = {
    OBSERVATORY_ID: 'OBSERVATORY_ID',
    OBSERVATORY_NAME: 'OBSERVATORY_NAME',
    OBSERVATORY_TYPE: 'OBSERVATORY_TYPE',
};

export const HIDE_TIDE_OBS_DETAIL_FEATURE_KEY = {
    OBSERVATORY_ID: 'OBSERVATORY_ID',
    OBSERVATORY_TYPE: 'OBSERVATORY_TYPE',
    OBSERVATORY_COLOR: 'OBSERVATORY_COLOR',
    OBSERVATORY_NAME: 'OBSERVATORY_NAME',
    OBSERVATORY_DATE: 'OBSERVATORY_DATE',
    OBSERVATORY_TIDE_LEVEL: 'OBSERVATORY_TIDE_LEVEL',
    OBSERVATORY_SEA_TEMP: 'OBSERVATORY_SEA_TEMP',
    OBSERVATORY_TEMP: 'OBSERVATORY_TEMP',
    OBSERVATORY_PRESSURE: 'OBSERVATORY_PRESSURE',
    OBSERVATORY_WIND_DIRECTION: 'OBSERVATORY_WIND_DIRECTION',
    OBSERVATORY_WIND_SPEED: 'OBSERVATORY_WIND_SPEED',
    OBSERVATORY_TIDE_DIRECTION: 'OBSERVATORY_TIDE_DIRECTION',
    OBSERVATORY_TIDE_SPEED: 'OBSERVATORY_TIDE_SPEED',
};

//[조석정보] 조위관측소 feature
export const TIDAL_OBS_STATION_FEATURE_KEY = {
    TIDAL_OBS_STATION_ID: 'TIDAL_OBS_STATION_ID',
    TIDAL_OBS_STATION_NAME: 'TIDAL_OBS_STATION_NAME',
    TIDAL_OBS_STATION_TYPE: 'TIDAL_OBS_STATION_TYPE',
};

//[조석정보] 일출몰관측지역 feature
export const SUN_OBS_LOCATION_FEATURE_KEY = {
    SUN_OBS_LOCATION_NAME: 'SUN_OBS_LOCATION_NAME',
    SUN_OBS_LOCATION_TYPE: 'SUN_OBS_LOCATION_TYPE',
};

//[태풍정보] 태풍 선택 세부 경로 feature
export const TYPHOON_SELECT_DETAIL_KEY = {
    TYPHOON_SELECT_DETAIL_PRESENTATION_SEQUENCE: 'TYPHOON_SELECT_DETAIL_PRESENTATION_SEQUENCE',
    TYPHOON_SELECT_DETAIL_TIME_INTERVAL: 'TYPHOON_SELECT_DETAIL_TIME_INTERVAL',
    TYPHOON_SELECT_DETAIL_SEQUENCE: 'TYPHOON_SELECT_DETAIL_SEQUENCE',
    TYPHOON_SELECT_DETAIL_YEAR: 'TYPHOON_SELECT_DETAIL_YEAR',
    TYPHOON_SELECT_DETAIL_PREDICT_TIME: 'TYPHOON_SELECT_DETAIL_PREDICT_TIME',
};

//[항공기상] 공항 리스트 feature
export const AIPORT_FEATURE_KEY = {
    AIRPORT_ID: 'AIRPORT_ID',
    AIRPORT_NAME: 'AIRPORT_NAME',
    AIRPORT_ICAO_CODE: 'AIRPORT_ICAO_CODE',
};

//[해구분석] 각 해구도 Feature 정보
export const ANALYSIS_MARINZONE_FEATURE_KEY = {
    ANALYSIS_MARINZONE_ID: 'ANALYSIS_MARINZONE_ID',
    ANALYSIS_MIN_LON: 'ANALYSIS_MIN_LON',
    ANALYSIS_MIN_LAT: 'ANALYSIS_MIN_LAT',
    ANALYSIS_MAX_LON: 'ANALYSIS_MAX_LON',
    ANALYSIS_MAX_LAT: 'ANALYSIS_MAX_LAT',
    WIND_SPEED_LEVEL: 'WIND_SPEED_LEVEL',
};

//[풍력단지] feature 정보
export const WIND_POWER_FEATURE_KEY = {
    WIND_POWER_FARM_NO: 'WIND_POWER_FARM_NO',
    WIND_POWER_FARM_NM: 'WIND_POWER_FARM_NM',
    WIND_POWER_TURBINE_NO: 'WIND_POWER_TURBINE_NO',
    WIND_POWER_COMPLETION_DATE: 'WIND_POWER_COMPLETION_DATE',
    WIND_POWER_CLASSIFICATION: 'WIND_POWER_CLASSIFICATION',
    WIND_POWER_ADDRESS: 'WIND_POWER_ADDRESS',
};

//[해경관할서소] feature 정보
export const KCG_DETP_FEATURE_KEY = {
    KCG_DEPT_CLASS: 'KCG_DEPT_CLASS',
    KCG_DEPT_NAME: 'KCG_DEPT_NAME',
    KCG_DEPT_ADDRESS: 'KCG_DEPT_ADDRESS',
};

export const MENU_GROUP = {
    COMMON_LEFT_MENU: 'common-left',
    GIS_LEFT_MENU_1: 'gis-left-1',
    GIS_LEFT_MENU_2: 'gis-left-2',
    GIS_LEFT_MENU_3: 'gis-left-3',
};

export const MENU = {
    KCGV: '/kcgv',
    MAIN: '/main',

    LIVE: '/main/live',
    LIVE_FILTER: '/main/live/filter',
    LIVE_LAYER: '/main/live/layer',

    SHIP: '/main/ship',
    SHIP_SEARCH: '/main/ship/search',
    SHIP_ATTENTION: '/main/ship/attention',
    SHIP_PERMISSION: '/main/ship/permission',
    SHIP_SANCTION: '/main/ship/sanction',
    SHIP_SINKING: '/main/ship/sinking',
    SHIP_ENTRY: '/main/ship/entry',
    SHIP_DETAIL: '/detail/:id', // 시연 이후 수정 작업 필요
    SHIP_DETAIL_LOST: '/detailLost/:id',

    SHIP_REALM: '/main/ship/searealm',
    SHIP_ANALYSIS: '/main/ship/analysis',
    SHIP_SATELLITE: '/main/ship/satellite',

    //해경 자산
    ASSET: '/main/asset',
    ASSET_STATUS: '/main/asset/status',
    ASSET_SECURITY: '/main/asset/security',

    SATELLITE: '/main/satellite',
    SATELLITE_SEARCH: '/main/satellite/search',
    SATELLITE_MANAGE: '/main/satellite/satellite-manage',
    SATELLITE_COMPANY: '/main/satellite/company',

    WEATHER: '/main/weather',
    WEATHER_FORECAST: '/main/weather/forecast',
    WEATHER_WARNING: '/main/weather/warning',
    WEATHER_TYPHOON: '/main/weather/typhoon',
    WEATHER_HIGH_TIDE: '/main/weather/high-tide',
    WEATHER_SUNRISE_SET: '/main/weather/sunrise-set',
    WEATHER_AIRPORT: '/main/weather/airport',

    TIMELINE: '/main/timeline',

    ANALYSIS: '/main/analysis',
    ANALYSIS_REALM: '/main/analysis/realm',
    ANALYSIS_OCEAN: '/main/analysis/analysis-ocean',
    ANALYSIS_ENTER_SHIP: '/main/analysis/analysis-enter-ship',
    ANALYSIS_MARINE_ZONE: '/main/analysis/analysis-marine-zone',

    ANALYSISMAP: '/main/analyzMap',
    ANALYSISMAP_SATELLITE: '/main/analyzMap/satellite',
    ANALYSISMAP_SATELLITELIST: '/main/analyzMap/satellitelist',
    ANALYSISMAP_FORECAST: '/main/analyzMap/forecast',
    ANALYSISMAP_STATISTICS: '/main/analyzMap/statistics',

    FILTER: '/main/filter',
    FILTER_SHIP: '/main/filter/ship',
    FILTER_LAYER: '/main/filter/layer',

    PRIVATE: '/main/private',
    PRIVATE_DASHBOARD: '/main/private/dashboard',
};
export const COMMON = {
    COMMON_MAIN: '/common',

    // 대시보드
    COMMON_DASHBOARD: '/common/dashboard',

    // 모니터링
    COMMON_MONITORING: '/common/signal/monitoring',

    // VTS모니터링
    COMMON_VTS_MONITORING: '/common/monitoring',

    // OpenAPI연계설정
    COMMON_OPENAPI: '/common/OpenApiManage',

    // 사용자관리
    COMMON_USER: '/common/user',

    // 계정관리
    COMMON_ACCOUNT: '/common/account',
    COMMON_AUTH_ACCNT: '/common/auth/accnt',
    COMMON_MENU_ACCNT_AUTH_ACCNT: '/common/menu/auth/accnt',

    // 그룹관리
    COMMON_AUTH_GRP: '/common/auth/grp',
    COMMON_MENU_AUTH_GRP: '/common/menu/auth/grp',

    // 메뉴관리
    COMMON_MENU: '/common/menu',
    COMMON_MENU_AUTH_MANAGE: '/common/menu/auth/manage',

    // 로그인 관리
    COMMON_LOGIN: '/common/login',

    // 공통코드 관리
    COMMON_COMMON_CODE: '/common/commonCode',

    // 선박 정보 관리
    COMMON_SHIP_MANAGE: '/common/ship/manage',
};

//유저 개인설정
export const USER_SETTING_FILTER = '000001';
export const USER_SETTING_ASSET = '000003';
export const USER_SETTING_GUARD = '000004';
export const USER_SETTING_THEME = '000007';

export const USER_SETTING_FISHING = '000001';
export const USER_SETTING_PASS = '000002';
export const USER_SETTING_CARGO = '000003';
export const USER_SETTING_TANKER = '000004';
export const USER_SETTING_GOV = '000005';
export const USER_SETTING_KCGV = '000006';
export const USER_SETTING_SAR_AIRCRAFT = '000007';
export const USER_SETTING_NORMAL = '000008';
export const USER_SETTING_KOREA = '000009';
export const USER_SETTING_CHINA = '000010';
export const USER_SETTING_JAPAN = '000011';
export const USER_SETTING_NORTH_KOREA = '000012';
export const USER_SETTING_ETC = '000013';
export const USER_SETTING_AIS = '000014';
export const USER_SETTING_VPASS = '000015';
export const USER_SETTING_ENAV = '000016';
export const USER_SETTING_VTS_AIS = '000017';
export const USER_SETTING_D_MF_HF = '000018';
export const USER_SETTING_RADAR = '000019';
export const USER_SETTING_MMSI_CHANGE = '000020';
export const USER_SETTING_CHINA_PERMISSION = '000021';
export const USER_SETTING_GOV_SHIP = '000022';
export const USER_SETTING_SSE_ZONE_COTRACT = '000023';
export const USER_SETTING_NON_PERMISSION = '000024';
export const USER_SETTING_SOS_MESSAGE = '000025';
export const USER_SETTING_LOST_SIGNAL_CODE = '000026';
export const USER_SETTING_HAZARD = '000027';
export const USER_SETTING_BUOY = '000028';

export const USER_SETTING_SHIP = '000036';
export const USER_SETTING_ROTATION = '000037';
export const USER_SETTING_FIXED = '000038';
export const USER_SETTING_AI = '000039';
export const USER_SETTING_VIDEO = '000072';
export const USER_SETTING_NORTH_KOREA_AI = '000077';

export const USER_SETTING_SOS = '000040';
export const USER_SETTING_VIRTUAL = '000041';
export const USER_SETTING_INSPECTION = '000042';

export const USER_SETTING_THEME_STANDDARD = '000073';
export const USER_SETTING_THEME_SIMPLE = '000074';
export const USER_SETTING_THEME_DARK = '000075';

export const USER_LOGIN_DUE_DATE = 14400000;

// 정인 추가
/* 서버 모니터링 타입 */
export const STATUS = {
    RUNNING: {
        code: 'running',
        color: '#4CAF50',
        message: 'running',
    },
    ERROR: {
        code: 'error',
        color: '#F44336',
        message: 'error',
    },
    WARNING: {
        code: 'warning',
        color: '#FFC107',
        message: 'warning',
    },
    CREATED: {
        code: 'created',
        color: '#2196F3',
        message: 'created',
    },
    EXITED: {
        code: 'exited',
        color: '#9E9E9E',
        message: 'exited',
    },
    START: {
        code: 'start',
        color: '#4CAF50',
        message: 'start',
    },
    STOP: {
        code: 'exited',
        color: '#9E9E9E',
        message: 'exited',
    },
    RESTART: {
        code: 'restart',
        color: '#9E9E9E',
        message: 'restart',
    },
} ;

export const DEFAULT_THRESHOLDS = {
    cpuThreshold: 80,
    memoryThreshold: 80,
    diskThreshold: 80,
} ;

export const THRESHOLD = {
    WARNING: 80,
    ERROR: 90,
};

export const MONITORING_SIGNAL = {
    GIC: '경인연안',
    GI: '경인항',
    GS: '군산항',
    DH: '동해안',
    MS: '마산항',
    MP: '목포항',
    BSN: '부산신항',
    BS: '부산항',
    YSC: '여수연안',
    YS: '여수항',
    WD: '완도항',
    US: '울산항',
    IC: '인천항',
    JJ: '제주항',
    JDC: '진도연안',
    TAC: '태안연안',
    TYC: '통영연안',
    PT: '평택항',
    PH: '포항항',
    DS: '대산항',
    '001782': '해경',
};
