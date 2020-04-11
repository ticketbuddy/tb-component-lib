export const EnumState = ({
  e,
  onEmpty,
  onPopulated
}: {
  e: [] | {};
  onEmpty: () => any;
  onPopulated: () => any;
}) => {
  if (Object.keys(e).length === 0) return onEmpty();

  return onPopulated();
};
