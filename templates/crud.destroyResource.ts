import ApiResponse from '../lib/response/ApiResponse';

interface templateNameDestroyResourceProps {
    // your props goes here
}

class templateNameDestroyResource extends ApiResponse {
    constructor(data: templateNameDestroyResourceProps | templateNameDestroyResourceProps[]) {
        if(data){
            super(ApiResponse.success([], 'templateName deleted successfully.'));
        }
        else{
            super(ApiResponse.error('Unable to delete the templateName with given data.'));
        }
    }
}


export default templateNameDestroyResource;
