document.querySelector('nav').addEventListener('click', function (e) {
  var dest = e.target.href
  
  if (!dest || !(dest = dest.split('#')[1])) return

  e.preventDefault()

  var p = document.querySelector('main')
	var a = document.getElementById(dest)
	console.log(a);

  var st = p.scrollTop
	var d = a.getBoundingClientRect().top - p.getBoundingClientRect().top - 8
	console.log(d)
  var s = d / 1000
  var pt = performance.now()
  
  requestAnimationFrame(function f(t) {
    console.log((p.scrollTop = st + d * (t - pt) / 1000), (st + d))
    var cur = p.scrollTop = st + s * (t - pt)
    if (s<0 ? cur > st + d : cur < st + d) requestAnimationFrame(f)
    else requestAnimationFrame(() => p.scrollTop = st + d)
  })
});