function d(a, b, c) {
  var x,
    y,
    z,
    w,
    t,
    u,
    v = 0,
    p = false,
    q = false,
    r = true;

  if (typeof a != "function") {
    throw new TypeError("Expected a function");
  }
  b = Number(b) || 0;
  if (typeof c == "object") {
    p = !!c.l;
    q = "m" in c;
    z = q ? Math.max(Number(c.m) || 0, b) : z;
    r = "t" in c ? !!c.t : r;
  }

  function e(f) {
    var g = x,
      h = y;

    x = y = undefined;
    v = f;
    w = a.apply(h, g);
    return w;
  }

  function f(i) {
    v = i;
    t = setTimeout(k, b);
    return p ? e(i) : w;
  }

  function g(j) {
    var k = j - u,
      l = j - v,
      m = b - k;

    return q ? Math.min(m, z - l) : m;
  }

  function h(n) {
    var o = n - u,
      p = n - v;

    return u === undefined || o >= b || o < 0 || (q && p >= z);
  }

  function k() {
    var q = Date.now();
    if (h(q)) {
      return i(q);
    }
    t = setTimeout(k, g(q));
  }

  function i(r) {
    t = undefined;

    if (r && x) {
      return e(r);
    }
    x = y = undefined;
    return w;
  }

  function j() {
    if (t !== undefined) {
      clearTimeout(t);
    }
    v = 0;
    x = u = y = t = undefined;
  }

  function l() {
    return t === undefined ? w : i(Date.now());
  }

  function m() {
    var q = Date.now(),
      r = h(q);

    x = arguments;
    y = this;
    u = q;

    if (r) {
      if (t === undefined) {
        return f(u);
      }
      if (q) {
        clearTimeout(t);
        t = setTimeout(k, b);
        return e(u);
      }
    }
    if (t === undefined) {
      t = setTimeout(k, b);
    }
    return w;
  }

  m.cancel = j;
  m.flush = l;
  return m;
}
