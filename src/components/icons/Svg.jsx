function Svg({
  width,
  height,
  viewBox,
  className,
  d,
  fill,
  fillRule,
  ...props
}) {
  return (
    <svg width={width} height={height} viewBox={viewBox} className={className}>
      <path d={d} fill={fill} fillRule={fillRule}></path>
    </svg>
  );
}

export default Svg;
