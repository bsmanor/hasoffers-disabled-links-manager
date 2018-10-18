export interface BrandInformation {
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
  _: string;
}
export interface Response {
  status: number;
  httpStatus: number;
  data: Data;
  errors?: (null)[] | null;
  errorMessage?: null;
}
export interface Data {
  Brand: Brand;
}
export interface Brand {
  id: string;
  network_id: string;
  network_name: string;
  hostname: string;
  jump_hostname?: null;
  dev_hostname?: null;
  email: string;
  created: string;
  has_verified_email?: null;
  has_database: string;
  has_user: string;
  is_current: string;
  schema_version: string;
  code_version?: null;
  shared_server: string;
  activated?: null;
  network_type: string;
  edition: string;
  payment_cycle: string;
  payment_price: string;
  status: string;
  has_offer: string;
  jump_hostname_has_ssl: string;
  volume_index: string;
  under_maintenance: string;
  disable_tracking_monitor: string;
  exchange_enabled: string;
  reactivated_date: string;
  referral_type: string;
  referral_details: string;
  is_archived: string;
  stats_version: string;
  db_pool_id: string;
  db_stat_pool_id: string;
  data_on_db_pool: string;
  app_pool_id: string;
  max_partition_date?: null;
  memcache_cluster?: null;
  ssh_port_start?: null;
  signup_code: string;
  modified: string;
  qproc_stats_target: string;
  jump_redirect: string;
  base_app_url: string;
  base_jump_url: string;
  app_cname: string;
  jump_cname: string;
}
