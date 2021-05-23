![image](/Users/liudongyang/Desktop/project/newwork-protocol/TCP&IP/banner.jpg)

> TCP/IP（Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议）是指能够在多个不同网络间实现信息传输的协议簇。TCP/IP协议不仅仅指的是`TCP`和`IP`两个协议，而是指一个由`FTP`、`SMTP`、`TCP`、`UDP`、`IP`等协议构成的协议簇， 只是因为在TCP/IP协议中TCP协议和IP协议最具代表性，所以被称为TCP/IP协议。

### TCP/IP的分层管理

TCP/IP协议族按层次分为一下四层：应用层、传输层、网络层和数据链路层

+ 应用层

  应用层决定了向用户提供应用服务时通信的活动。比如`FTP`和`DNS`，以及我们所熟悉的`HTTP`

+ 传输层

  传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。在传输层有两个性质不同的协议：`TCP`和`UDP`

+ 网络层

  网络层用来处理在网络上流动的数据包。数据包时网络传输的最小数据单位。该层主要规定的事传输路线。

+ 链路层

  用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、网卡等。硬件上的范畴均在链路层的作用范围之内。

发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该层所属的首部信息。反之，接收端在层与层传输数据时，没经过一层时会把对应的首部消除，这种把数据信息包装起来的做法称为封装。

![image](/Users/liudongyang/Desktop/project/newwork-protocol/TCP&IP/pic1.jpg)