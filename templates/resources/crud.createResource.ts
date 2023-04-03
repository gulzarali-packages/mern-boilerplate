import ApiResponse from '../lib/response/ApiResponse';

interface templateNameCreateResourceProps {
    // your props goes here
}

class templateNameCreateResource extends ApiResponse {
    constructor(data: templateNameCreateResourceProps | templateNameCreateResourceProps[]) {
        if(data){
            const formattedData = Array.isArray(data) ? data.map(formatData) : formatData(data);
            super(ApiResponse.success(formattedData, 'templateName created successfully.'));
        }
        else{
            super(ApiResponse.error('Unable to create the templateName with given data.'));
        }
    }
}

function formatData(data: any): any {
    return data;
}

export default templateNameCreateResource;
