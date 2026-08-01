export interface TSConfig {
  compilerOptions?: Record<string, unknown>;
  extends?: string;
  include?: string[];
  exclude?: string[];
}

declare const configs: {
  base: TSConfig;
  node: TSConfig;
  web: TSConfig;
};

export default configs;
