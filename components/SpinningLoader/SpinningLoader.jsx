const SpinningLoader = ({color}) => {
  return (
    <div class="flex-1 flex justify-center items-center">
      <div
        class="animate-spin rounded-full h-20 w-20 border-t-4"
        style={{
          borderColor: color
        }}
      ></div>
    </div>
  );
};

export default SpinningLoader;