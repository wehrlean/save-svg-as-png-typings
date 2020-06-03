declare module "save-svg-as-png" {
  export function prepareSvg(el: any, options?: any, done?: any): Promise<;
  export function svgAsDataUri(el: any, options?: any): Promise<String>;
  export function svgAsPngUri(el: any, options?: any): Promise<String>;
  export function saveSvg(el: any, name: string, options?: any): void;
  export function saveSvgAsPng(el: any, name: string, options?: any): void;
  
}
//declare module saveAsPng {
//    export function saveSvgAsPng(el: any, name: string, options: any): void;
//}
