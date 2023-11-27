interface IState {
    data: unknown;
    loading: boolean;
    limit: number | 10;
    error: any;
    page: number;
    totalPages: number;
    totalResults: number;
    nextPageUrl: string| number |null | undefined;
    prevPageUrl: string | number| null | undefined
    
}