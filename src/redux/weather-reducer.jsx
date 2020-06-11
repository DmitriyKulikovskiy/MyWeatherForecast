
const SEARCH_CITY = 'SEARCH_CITY'
const WEATHER_IS_LOADING = 'WEATHER_IS_LOADING'
const GET_WEATHER_DATA = 'GET_WEATHER_DATA'
const GET_DAILY_DATA = 'GET_DAILY_DATA'
const SHOW_ERROR = 'SHOW_ERROR'
const CLEAR_ARRAY = 'CLEAR_ARRAY'


const initialState = {
    cityValue: '',
    isLoading: false,
    data: [],
    dailyData: [],
    error: ''
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_CITY: {
            return {
                ...state,
                cityValue: action.value
            }
        }
        case WEATHER_IS_LOADING: {
            return {
                ...state,
                isLoading: action.loading
            }
        }
        case GET_WEATHER_DATA: {
            return {
                ...state,
                data: [action.data]
            }
        }
        case GET_DAILY_DATA: {
            return {
                ...state,
                dailyData: action.data
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case CLEAR_ARRAY: {
            return {
                ...state,
                data: [],
                dailyData: []
            }
        }
        default:
            return state;
    }
}

export const getCityValue = value => ({type: 'SEARCH_CITY', value})
export const loader = loading => ({type: 'WEATHER_IS_LOADING', loading})
export const getWeatherData = data => ({type: 'GET_WEATHER_DATA',data})
export const getDailyData = data => ({type: 'GET_DAILY_DATA' , data})
export const showRequestError = error => ({type: 'SHOW_ERROR', error})
export const clearArray = () => ({type: 'CLEAR_ARRAY'})

export default weatherReducer