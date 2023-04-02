interface ApiResponseProps {
    success: boolean;
    data: any;
    message: string;
  }
  
  class ApiResponse {
    public success: boolean;
    public data: any;
    public message: string;
  
    constructor({ success, data, message }: ApiResponseProps) {
      this.success = success;
      this.data = data;
      this.message = message;
    }
  
    static success(data: any, message: string): ApiResponse {
      return new ApiResponse({ success: true, data, message });
    }
  
    static error(message: string, data: any = null): ApiResponse {
      return new ApiResponse({ success: false, data, message });
    }
  
    toJson(): ApiResponseProps {
      return {
        success: this.success,
        data: this.data,
        message: this.message,
      };
    }
  }
  
  export default ApiResponse;
  