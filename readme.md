can do after deploy

reversed useTransition

This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    in Carousel (at HomePage.tsx:17)
    in Route (at HomePage.tsx:16)
    in Home (at Universal.tsx:67)

compat
https://stackoverflow.com/questions/52736265/can-i-render-warning-message-if-users-browser-is-not-supported
https://medium.com/@oahehc/dealing-with-browser-support-on-react-project-b38f3d92aa02
https://dev.to/amplifr/outdated-browser-detection-with-browserslist-10co