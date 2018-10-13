  export interface DisabledLinksResponse {
    request: Request;
    response: Response;
  }
  export interface Request {
    Target: string;
    Format: string;
    Service: string;
    Version: string;
    NetworkToken: string;
    Method: string;
    fields?: (string)[] | null;
  }
  export interface Response {
    status: number;
    httpStatus: number;
    errors?: (null)[] | null;
    errorMessage?: null;
    data: {};
  }

  export interface OfferDisabledLink {
    strict: string;
    source: string;
    offer_id: string;
    id: string;
    datetime: string;
    created_by: string;
    affiliate_id: string;
    aff_info5: string;
    aff_info4: string;
    aff_info3: string;
    aff_info2: string;
    aff_info1: string;
  }
  