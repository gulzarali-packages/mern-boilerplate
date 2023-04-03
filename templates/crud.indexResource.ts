import ApiResponse from '../lib/response/ApiResponse';

interface templateNameIndexResourceProps {
    data: any;
    current_page: any,
    per_page: any,
    total: any,
    last_page: any,
}

class templateNameIndexResource extends ApiResponse {
    constructor(data: templateNameIndexResourceProps | templateNameIndexResourceProps[]) {
        const formattedData = Array.isArray(data.data) ? data.data.map(formatData) : formatData(data.data);
        super(ApiResponse.success({
            data: formattedData,
            current_page: data.page,
            per_page: data.perPage,
            total: data.total,
            last_page: Math.ceil(data.total / data.perPage)
        }, 'templateNames fetched successfully.'));
    }
}

function formatData(data: any): any {
    return data;
    // return {
    //     id: data._id,
    //     email: data.email,
    //     userName: data.userName
    // };
}

export default templateNameIndexResource;
