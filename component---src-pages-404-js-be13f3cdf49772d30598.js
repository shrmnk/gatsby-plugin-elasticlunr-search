;(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        138: function(e, t, a) {
            'use strict'
            a.r(t)
            var n = a(0),
                d = a.n(n),
                r = a(149)
            t.default = function() {
                return d.a.createElement(
                    r.a,
                    null,
                    d.a.createElement('h1', null, 'NOT FOUND'),
                    d.a.createElement(
                        'p',
                        null,
                        "You just hit a route that doesn't exist... the sadness."
                    )
                )
            }
        },
        142: function(e, t, a) {
            'use strict'
            a.r(t),
                a.d(t, 'graphql', function() {
                    return p
                }),
                a.d(t, 'StaticQueryContext', function() {
                    return l
                }),
                a.d(t, 'StaticQuery', function() {
                    return b
                })
            var n = a(0),
                d = a.n(n),
                r = a(4),
                c = a.n(r),
                o = a(141),
                i = a.n(o)
            a.d(t, 'Link', function() {
                return i.a
            }),
                a.d(t, 'withPrefix', function() {
                    return o.withPrefix
                }),
                a.d(t, 'navigate', function() {
                    return o.navigate
                }),
                a.d(t, 'push', function() {
                    return o.push
                }),
                a.d(t, 'replace', function() {
                    return o.replace
                }),
                a.d(t, 'navigateTo', function() {
                    return o.navigateTo
                })
            var s = a(143),
                f = a.n(s)
            a.d(t, 'PageRenderer', function() {
                return f.a
            })
            var u = a(33)
            a.d(t, 'parsePath', function() {
                return u.a
            })
            var l = d.a.createContext({}),
                b = function(e) {
                    return d.a.createElement(l.Consumer, null, function(t) {
                        return e.data || (t[e.query] && t[e.query].data)
                            ? (e.render || e.children)(
                                  e.data ? e.data.data : t[e.query].data
                              )
                            : d.a.createElement(
                                  'div',
                                  null,
                                  'Loading (StaticQuery)'
                              )
                    })
                }
            function p() {
                throw new Error(
                    'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
                )
            }
            b.propTypes = {
                data: c.a.object,
                query: c.a.string.isRequired,
                render: c.a.func,
                children: c.a.func,
            }
        },
        143: function(e, t, a) {
            var n
            e.exports = ((n = a(145)) && n.default) || n
        },
        144: function(e) {
            e.exports = {
                data: {
                    site: {
                        siteMetadata: {
                            title:
                                'gatsby-plugin-elasticlunr-search example site',
                        },
                    },
                },
            }
        },
        145: function(e, t, a) {
            'use strict'
            a.r(t)
            a(34)
            var n = a(0),
                d = a.n(n),
                r = a(4),
                c = a.n(r),
                o = a(50),
                i = a(2),
                s = function(e) {
                    var t = e.location,
                        a = i.default.getResourcesForPathnameSync(t.pathname)
                    return d.a.createElement(
                        o.a,
                        Object.assign({ location: t, pageResources: a }, a.json)
                    )
                }
            ;(s.propTypes = {
                location: c.a.shape({ pathname: c.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = s)
        },
        146: function(e) {
            e.exports = {
                data: {
                    siteSearchIndex: {
                        index: {
                            version: '0.9.5',
                            fields: ['title', 'tags'],
                            ref: 'id',
                            documentStore: {
                                docs: {
                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                        id:
                                            'e480260f-b77f-56f9-ab4e-9a66b8d17f7b',
                                        title: 'My First Gatsby Post',
                                        path: '/1',
                                        tags: ['incredible', 'article'],
                                    },
                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                        id:
                                            '4527799e-95e6-5095-9c7d-b9351ebb75d7',
                                        title: 'My Second Gatsby Post',
                                        path: '/2',
                                        tags: ['amazing', 'article'],
                                    },
                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                        id:
                                            '27b48828-4198-54bc-b65e-461e990fefcd',
                                        title: 'My third Gatsby Post',
                                        path: '/3',
                                        tags: ['boring', 'article'],
                                    },
                                },
                                docInfo: {
                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                        title: 3,
                                        tags: 2,
                                    },
                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                        title: 3,
                                        tags: 2,
                                    },
                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                        title: 3,
                                        tags: 2,
                                    },
                                },
                                length: 3,
                                save: !0,
                            },
                            index: {
                                title: {
                                    root: {
                                        docs: {},
                                        df: 0,
                                        f: {
                                            docs: {},
                                            df: 0,
                                            i: {
                                                docs: {},
                                                df: 0,
                                                r: {
                                                    docs: {},
                                                    df: 0,
                                                    s: {
                                                        docs: {},
                                                        df: 0,
                                                        t: {
                                                            docs: {
                                                                'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                    tf: 1,
                                                                },
                                                            },
                                                            df: 1,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        g: {
                                            docs: {},
                                            df: 0,
                                            a: {
                                                docs: {},
                                                df: 0,
                                                t: {
                                                    docs: {},
                                                    df: 0,
                                                    s: {
                                                        docs: {},
                                                        df: 0,
                                                        b: {
                                                            docs: {},
                                                            df: 0,
                                                            i: {
                                                                docs: {
                                                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                        tf: 1,
                                                                    },
                                                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                        tf: 1,
                                                                    },
                                                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 3,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        p: {
                                            docs: {},
                                            df: 0,
                                            o: {
                                                docs: {},
                                                df: 0,
                                                s: {
                                                    docs: {},
                                                    df: 0,
                                                    t: {
                                                        docs: {
                                                            'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                tf: 1,
                                                            },
                                                            '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                tf: 1,
                                                            },
                                                            '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                tf: 1,
                                                            },
                                                        },
                                                        df: 3,
                                                    },
                                                },
                                            },
                                        },
                                        s: {
                                            docs: {},
                                            df: 0,
                                            e: {
                                                docs: {},
                                                df: 0,
                                                c: {
                                                    docs: {},
                                                    df: 0,
                                                    o: {
                                                        docs: {},
                                                        df: 0,
                                                        n: {
                                                            docs: {},
                                                            df: 0,
                                                            d: {
                                                                docs: {
                                                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 1,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        t: {
                                            docs: {},
                                            df: 0,
                                            h: {
                                                docs: {},
                                                df: 0,
                                                i: {
                                                    docs: {},
                                                    df: 0,
                                                    r: {
                                                        docs: {},
                                                        df: 0,
                                                        d: {
                                                            docs: {
                                                                '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                    tf: 1,
                                                                },
                                                            },
                                                            df: 1,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                tags: {
                                    root: {
                                        docs: {},
                                        df: 0,
                                        i: {
                                            docs: {},
                                            df: 0,
                                            n: {
                                                docs: {},
                                                df: 0,
                                                c: {
                                                    docs: {},
                                                    df: 0,
                                                    r: {
                                                        docs: {},
                                                        df: 0,
                                                        e: {
                                                            docs: {},
                                                            df: 0,
                                                            d: {
                                                                docs: {
                                                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 1,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        a: {
                                            docs: {},
                                            df: 0,
                                            r: {
                                                docs: {},
                                                df: 0,
                                                t: {
                                                    docs: {},
                                                    df: 0,
                                                    i: {
                                                        docs: {},
                                                        df: 0,
                                                        c: {
                                                            docs: {},
                                                            df: 0,
                                                            l: {
                                                                docs: {
                                                                    'e480260f-b77f-56f9-ab4e-9a66b8d17f7b': {
                                                                        tf: 1,
                                                                    },
                                                                    '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                        tf: 1,
                                                                    },
                                                                    '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                        tf: 1,
                                                                    },
                                                                },
                                                                df: 3,
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            m: {
                                                docs: {},
                                                df: 0,
                                                a: {
                                                    docs: {},
                                                    df: 0,
                                                    z: {
                                                        docs: {
                                                            '4527799e-95e6-5095-9c7d-b9351ebb75d7': {
                                                                tf: 1,
                                                            },
                                                        },
                                                        df: 1,
                                                    },
                                                },
                                            },
                                        },
                                        b: {
                                            docs: {},
                                            df: 0,
                                            o: {
                                                docs: {},
                                                df: 0,
                                                r: {
                                                    docs: {},
                                                    df: 0,
                                                    e: {
                                                        docs: {
                                                            '27b48828-4198-54bc-b65e-461e990fefcd': {
                                                                tf: 1,
                                                            },
                                                        },
                                                        df: 1,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            pipeline: ['trimmer', 'stopWordFilter', 'stemmer'],
                        },
                    },
                },
            }
        },
        147: function(e, t, a) {},
        149: function(e, t, a) {
            'use strict'
            var n = a(144),
                d = a(0),
                r = a.n(d),
                c = a(4),
                o = a.n(c),
                i = a(150),
                s = a.n(i),
                f = a(142),
                u = a(146),
                l = (a(49), a(48), a(7)),
                b = a.n(l),
                p = a(151),
                m = (function(e) {
                    function t(t) {
                        var a
                        return (
                            ((a =
                                e.call(this, t) ||
                                this).getOrCreateIndex = function() {
                                return a.index
                                    ? a.index
                                    : p.Index.load(a.props.searchIndex)
                            }),
                            (a.search = function(e) {
                                var t = e.target.value
                                ;(a.index = a.getOrCreateIndex()),
                                    a.setState({
                                        query: t,
                                        results: a.index
                                            .search(t)
                                            .map(function(e) {
                                                var t = e.ref
                                                return a.index.documentStore.getDoc(
                                                    t
                                                )
                                            }),
                                    })
                            }),
                            (a.state = { query: '', results: [] }),
                            a
                        )
                    }
                    return (
                        b()(t, e),
                        (t.prototype.render = function() {
                            return (
                                console.log(this.state.results),
                                r.a.createElement(
                                    'div',
                                    null,
                                    r.a.createElement('input', {
                                        style: { position: 'relative' },
                                        type: 'text',
                                        placeholder: 'Type title words or tags',
                                        value: this.state.query,
                                        onChange: this.search,
                                    }),
                                    r.a.createElement(
                                        'ul',
                                        {
                                            style: {
                                                position: 'absolute',
                                                backgroundColor: 'white',
                                                marginLeft: '0',
                                            },
                                        },
                                        this.state.results.map(function(e) {
                                            return r.a.createElement(
                                                'li',
                                                { key: e.id },
                                                r.a.createElement(
                                                    f.Link,
                                                    { to: '/' + e.path },
                                                    e.title
                                                ),
                                                ': ' + e.tags.join(',')
                                            )
                                        })
                                    )
                                )
                            )
                        }),
                        t
                    )
                })(d.Component),
                h = function(e) {
                    var t = e.siteTitle
                    return r.a.createElement(f.StaticQuery, {
                        query: '1346230460',
                        render: function(e) {
                            return r.a.createElement(
                                'header',
                                {
                                    style: {
                                        background: 'rebeccapurple',
                                        marginBottom: '1.45rem',
                                    },
                                },
                                r.a.createElement(
                                    'div',
                                    {
                                        style: {
                                            margin: '0 auto',
                                            maxWidth: 960,
                                            padding: '1.45rem 1.0875rem',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        },
                                    },
                                    r.a.createElement(
                                        'h1',
                                        { style: { margin: 0 } },
                                        r.a.createElement(
                                            f.Link,
                                            {
                                                to: '/',
                                                style: {
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                },
                                            },
                                            t
                                        )
                                    ),
                                    r.a.createElement(m, {
                                        searchIndex: e.siteSearchIndex.index,
                                    })
                                )
                            )
                        },
                        data: u,
                    })
                },
                g = (a(147),
                function(e) {
                    var t = e.children
                    return r.a.createElement(f.StaticQuery, {
                        query: '2924840780',
                        render: function(e) {
                            return r.a.createElement(
                                r.a.Fragment,
                                null,
                                r.a.createElement(
                                    s.a,
                                    {
                                        title: e.site.siteMetadata.title,
                                        meta: [
                                            {
                                                name: 'description',
                                                content: 'Sample',
                                            },
                                            {
                                                name: 'keywords',
                                                content: 'sample, something',
                                            },
                                        ],
                                    },
                                    r.a.createElement('html', { lang: 'en' })
                                ),
                                r.a.createElement(h, {
                                    siteTitle: e.site.siteMetadata.title,
                                }),
                                r.a.createElement(
                                    'div',
                                    {
                                        style: {
                                            margin: '0 auto',
                                            maxWidth: 960,
                                            padding: '0px 1.0875rem 1.45rem',
                                            paddingTop: 0,
                                        },
                                    },
                                    t
                                )
                            )
                        },
                        data: n,
                    })
                })
            g.propTypes = { children: o.a.node.isRequired }
            t.a = g
        },
    },
])
//# sourceMappingURL=component---src-pages-404-js-be13f3cdf49772d30598.js.map
