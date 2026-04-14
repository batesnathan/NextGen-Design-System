import React from 'react';

const imgSize24 = "http://localhost:3845/assets/3395e07a0c5ee58815b1655366ae54ef6c70797a.svg";
const imgVector = "http://localhost:3845/assets/63f43aa9e1c9e77e180bebbb660c90c1b71ef3a7.svg";
const imgVector1 = "http://localhost:3845/assets/f53ba10270d0bf60db324fa8c5fc71c15218251c.svg";
const imgSize16 = "http://localhost:3845/assets/bd5c7260cedd58e8ad8169e448c8be08e4769e73.svg";
const imgVector2 = "http://localhost:3845/assets/fed11ea3aaa7e8d67e0fb2ae67ece7453adfe7cb.svg";
const imgVector3 = "http://localhost:3845/assets/07f8fe44677fba11fe8047499b74f2b257523198.svg";
const imgSize20 = "http://localhost:3845/assets/e67a7b74fd5df7145414a8716a4b470405811329.svg";
const imgVector4 = "http://localhost:3845/assets/e449426124d7af020edcb5bbb2a03d3edd8ec317.svg";
const imgVector5 = "http://localhost:3845/assets/9401c85b75fa4387c0a327151c562db0c3ec4785.svg";
const imgSize32 = "http://localhost:3845/assets/667d414235368dec406aa294f26f1b3cbafd43f6.svg";
const imgVector6 = "http://localhost:3845/assets/4f3d71475fbd2fb8938aab7729f94bb4ce9e7f30.svg";
const imgVector7 = "http://localhost:3845/assets/b8e92296667317199eafa2b3ca526d7585d2070a.svg";
const imgSize48 = "http://localhost:3845/assets/11bcfcaea9d4bcc384377836d329d2c71e8462de.svg";
const imgVector8 = "http://localhost:3845/assets/81c69e170e672f3bb20986c3541ec58f8c28fc71.svg";
const imgVector9 = "http://localhost:3845/assets/f3e5b2958545da7ec39b969cc27228c7d027fe3c.svg";

export type VisibilityProps = {
  className?: string;
  size?: "16" | "20" | "24" | "32" | "48";
};

export const Visibility = React.forwardRef<HTMLDivElement, VisibilityProps>(
  ({ className, size = "24" }, ref) => {
    const is16 = size === "16";
    const is20 = size === "20";
    const is32 = size === "32";
    const is48 = size === "48";
    return (
      <div
        ref={ref}
        className={className || `overflow-clip relative ${is48 ? "size-[48px]" : is32 ? "size-[32px]" : is20 ? "size-[20px]" : is16 ? "size-[16px]" : "size-[24px]"}`}
        id={is48 ? "node-622_623" : is32 ? "node-622_624" : is20 ? "node-622_626" : is16 ? "node-622_627" : "node-622_625"}
      >
        <img alt="visibility" className="absolute block inset-0 max-w-none size-full" src={is48 ? imgSize48 : is32 ? imgSize32 : is20 ? imgSize20 : is16 ? imgSize16 : imgSize24} />
        <div className="absolute inset-[41.67%]" data-name="Vector" id={is48 ? "node-622_621" : is32 ? "node-622_617" : is20 ? "node-622_609" : is16 ? "node-622_605" : "node-622_613"}>
          <div className="absolute inset-[-18.75%]">
            <img alt="" className="block max-w-none size-full" src={is48 ? imgVector8 : is32 ? imgVector6 : is20 ? imgVector4 : is16 ? imgVector2 : imgVector} />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector" id={is48 ? "node-622_622" : is32 ? "node-622_618" : is20 ? "node-622_610" : is16 ? "node-622_606" : "node-622_614"}>
          <div className="absolute inset-[-6.25%_-4.17%]">
            <img alt="" className="block max-w-none size-full" src={is48 ? imgVector9 : is32 ? imgVector7 : is20 ? imgVector5 : is16 ? imgVector3 : imgVector1} />
          </div>
        </div>
      </div>
    );
  }
);

Visibility.displayName = "Visibility";

export default Visibility;
