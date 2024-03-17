export function Video({
  isMobileDevice,
  isCurrentSectionHome,
  desktopVideo,
  mobileVideo,
}) {
  return (
    <video
      id="background-video"
      className={
        isCurrentSectionHome
          ? "absolute h-full w-full object-cover"
          : "absolute h-full w-full object-cover hidden"
      }
      autoPlay
      loop
      muted
    >
      {/* Videos by Rostislav Uzunov */}
      {isMobileDevice ? (
        <source src={mobileVideo} type="video/mp4" />
      ) : (
        <source src={desktopVideo} type="video/mp4" />
      )}
    </video>
  );
}
