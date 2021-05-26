### 状态管理-cookie

HTTP是无状态协议，它不对之前发生过的请求和响应的状态进行管理，于是出现了**Cookie**技术。Cookie技术通过在请求和响应报文中写入Cookie信息来控制客户端的状态。

+ 使用Cookie的过程？
  1. Cookie会根据从服务器端发送的响应报文内的一个叫做`Set-Cookie`的首部字段信息，通知客户端保存Cookie。
  2. 当客户端发送请求时，客户端会自动在请求报文中加入Cookie值后发送出去。
  3. 服务端收到客户端发送过来的Cookie，根据Cookie得到状态信息。

和Cookie有关的首部字段主要是`Set-Cookie`和`Cookie`，其中前者为**响应首部字段**，后者为**请求首部字段**

+ Set-Cookie

  > 服务端通过Set-Cookie将Cookie写入到客户端

  Set-Cookie字段包含的属性如下：

  + NAME=VALUE（必须）

    赋予Cookie的名称和其值

  + expires=DATE

    Cookie的有效期，如果没有明确指定，关闭浏览器cookie就删掉了。

  + maxAge=\<non-zero-digit\>

    在 cookie 失效之前需要经过的秒数。秒数为 0 或 -1 将会使 cookie 直接过期。一些老的浏览器（ie6、ie7 和 ie8）不支持这个属性。对于其他浏览器来说，假如二者 （指 `Expires` 和`Max-Age`） 均存在，那么 Max-Age 优先级更高。

  + path=PATH

    将服务器上的文件目录作为Cookie的使用对象，如不指定，就是当前文档所在的文件目录

  + domain=域名

    作为Cookie使用对象的域名，默认为创建Cookie的服务器的域名

  + Secure

    仅在HTTPS安全通信时才会发送Cookie

  + HttpOnly

    如果设置了该属性，则js无法访问该Cookie。其目的主要为了防止跨站脚本攻击（XSS）对Cookie的信息窃取。

  + SameSite

    它允许您声明该Cookie是否仅限于第一方或者同一站点上下文。它可以设置为`Lax`、`Strict`和`none`。

    [参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

+ Cookie

  > 首部字段Cookie会告知服务器，当客户端想获得HTTP状态管理支持时，就会在请求中包含从服务器接收到的Cookie。