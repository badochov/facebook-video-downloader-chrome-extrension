let myMutation = false;

const observer = new MutationObserver((mutationList, _obs) => {
  const mutation = mutationList[mutationList.length - 1];
  if (mutation.type === "childList") {
    const el = mutation.addedNodes[0];
    if (el.nodeName === "VIDEO") {
      el.setAttribute("controlslist", "download");
      el.controls = true;
    }
  }
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
});
