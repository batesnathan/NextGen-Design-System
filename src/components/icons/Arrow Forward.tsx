import React from 'react';

const imgSize24 = "http://localhost:3845/assets/3395e07a0c5ee58815b1655366ae54ef6c70797a.svg";
const imgVector = "http://localhost:3845/assets/179ff3a63bcb3c96d31e25ef0ac770777b5ab3b7.svg";
const imgVector1 = "http://localhost:3845/assets/d2c557271098af875d479710b888839e7b25b77b.svg";
const imgVector2 = "http://localhost:3845/assets/1a2d1a843376c919305d71a915cf4d6c033821b7.svg";
const imgSize16 = "http://localhost:3845/assets/74e1610c7371f23dd92a1e1c601126e34e8f0e83.svg";
const imgVector3 = "http://localhost:3845/assets/35578830edcfed0306bec952a574b89857919873.svg";
const imgVector4 = "http://localhost:3845/assets/4e023fb454c9acb902e417e7efb60904fd043c5c.svg";
const imgVector5 = "http://localhost:3845/assets/806e089bc57c3e8a615852df5ab1720bcb2591ed.svg";
const imgSize20 = "http://localhost:3845/assets/fbb9268ca3c991c14a1fae2f10303836fc5d09c8.svg";
const imgVector6 = "http://localhost:3845/assets/04576e5b37af6211daee7a3382141a081cf1d98d.svg";
const imgVector7 = "http://localhost:3845/assets/f5f68248c88ebb1560a5a4611ed627df52861587.svg";
const imgVector8 = "http://localhost:3845/assets/aaaea19a596fb48d3fb96404691832fb6f9a0b53.svg";
const imgSize32 = "http://localhost:3845/assets/9d213b35940e96f1f7f950032831f09de9a0b4d3.svg";
const imgVector9 = "http://localhost:3845/assets/9e98107713e8a534d3ad43859bd85f4703dd729b.svg";
const imgVector10 = "http://localhost:3845/assets/e83e277989243f96ca1b68b7d6f9b90ab26da2c9.svg";
const imgVector11 = "http://localhost:3845/assets/b8b0965f2d0289ed0cc2720f6d858b605c6ccf2a.svg";
const imgSize48 = "http://localhost:3845/assets/8509fbdb03201f2b6b721c9e895952cb9309903e.svg";
const imgVector12 = "http://localhost:3845/assets/b75cdc4b1d9e9dd3b495c6d88726158a7bb9015e.svg";
const imgVector13 = "http://localhost:3845/assets/71ad808c643b2b50162fcd22b96a223470cafcbc.svg";
const imgVector14 = "http://localhost:3845/assets/346954ec58007018d09666d8837e0dfbe36d475e.svg";

export type ArrowForwardProps = {
  className?: string;
  size?: "24" | "48" | "32" | "20" | "16";
};

export const ArrowForward = React.forwardRef<HTMLDivElement, ArrowForwardProps>(
  ({ className, size = "24" }, ref) => {
    const is16 = size === "16";
    const is20 = size === "20";
    const is32 = size === "32";
    const is48 = size === "48";
    return (
      <div
        ref={ref}
        className={className || `overflow-clip relative ${is48 ? "size-[48px]" : is32 ? "size-[32px]" : is20 ? "size-[20px]" : is16 ? "size-[16px]" : "size-[24px]"}`}
        id={is48 ? "node-575_112" : is32 ? "node-575_113" : is20 ? "node-575_114" : is16 ? "node-575_115" : "node-575_116"}
      >
        <img alt="arrow forward" className="absolute block inset-0 max-w-none size-full" src={is48 ? imgSize48 : is32 ? imgSize32 : is20 ? imgSize20 : is16 ? imgSize16 : imgSize24} />
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector" id={is48 ? "node-575_99" : is32 ? "node-575_94" : is20 ? "node-575_84" : is16 ? "node-575_89" : "node-575_79"}>
          <div className={`absolute ${is48 ? "inset-[-1.5px_-5.36%]" : is32 ? "inset-[-1px_-5.36%]" : is20 ? "inset-[-0.63px_-5.36%]" : is16 ? "inset-[-0.5px_-5.36%]" : "inset-[-0.75px_-5.36%]"}`}>
            <img alt="" className="block max-w-none size-full" src={is48 ? imgVector12 : is32 ? imgVector9 : is20 ? imgVector6 : is16 ? imgVector3 : imgVector} />
          </div>
        </div>
        <div className="absolute bottom-[33.33%] left-[62.5%] right-[20.83%] top-1/2" data-name="Vector" id={is48 ? "node-575_100" : is32 ? "node-575_95" : is20 ? "node-575_85" : is16 ? "node-575_90" : "node-575_80"}>
          <div className="absolute inset-[-18.75%]">
            <img alt="" className="block max-w-none size-full" src={is48 ? imgVector13 : is32 ? imgVector10 : is20 ? imgVector7 : is16 ? imgVector4 : imgVector1} />
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[62.5%] right-[20.83%] top-[33.33%]" data-name="Vector" id={is48 ? "node-575_101" : is32 ? "node-575_96" : is20 ? "node-575_86" : is16 ? "node-575_91" : "node-575_81"}>
          <div className="absolute inset-[-18.75%]">
            <img alt="" className="block max-w-none size-full" src={is48 ? imgVector14 : is32 ? imgVector11 : is20 ? imgVector8 : is16 ? imgVector5 : imgVector2} />
          </div>
        </div>
      </div>
    );
  }
);

ArrowForward.displayName = "ArrowForward";

export default ArrowForward;
