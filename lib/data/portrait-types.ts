// Shape of the generated portrait map in portraits.ts.
export interface Portrait {
  id: string;
  /** Site-relative path of the cached copy, e.g. /data/portraits/hitler.jpg */
  src: string;
  /** Wikimedia Commons file page name */
  file: string;
  artist: string;
  licence: string;
  /** One true sentence for the credit line */
  credit: string;
  /** URL of the Commons file page, for attribution */
  page: string;
}
