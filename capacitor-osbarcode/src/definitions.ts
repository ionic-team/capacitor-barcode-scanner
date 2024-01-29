export interface OSBarcodePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
