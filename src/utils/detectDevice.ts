export default {
   isMobile: () =>  /Mobi|Android/i.test(navigator.userAgent),
   isTablet: () => /Tablet|iPad/i.test(navigator.userAgent),
   isDesktop: () => !/Mobi|Android|Tablet|iPad/i.test(navigator.userAgent),
   isSupportTouch: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0
}