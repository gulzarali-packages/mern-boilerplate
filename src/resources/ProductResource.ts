//@ts-nocheck
import ApiResponse from '../lib/response/ApiResponse';

interface resourceNameResourceProps {
    
}

class resourceNameResource extends ApiResponse {
    constructor(data: resourceNameResourceProps | resourceNameResourceProps[]) {
        const formattedData = Array.isArray(data) ? data.map(formatData) : formatData(data);
        super(ApiResponse.success(formattedData, 'resourceName successful'));
    }
}

function formatData(data: resourceNameResourceProps): any {
    return data;
    /**
     * return {
     * id:data.id,
     * name:data.name
     * }
     */
}

export default resourceNameResource;
