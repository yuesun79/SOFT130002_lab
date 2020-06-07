# lab10说明文档

#### exercise7.1 screenshot

<img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gffglmhnsdj30u021n16g.jpg" alt="exercise1" style="zoom:40%;" />

***PDO访问数据库***：通过数据库连接字符串、用户名和密码连接数据库，创建连接对象

利用try...catch机制处理错误：在try中用setAttribute()设置错误处理模式，`PDO::ERRMODE_EXCEPTION`设置错误码之外，还将抛出一个 PDOException 异常类并设置它的属性来反射错误码和错误信息

使用连接对象的query()方法，返回查询结果集`$result`(在表Artists里查询以`LastName`为排列顺序的库中所有记录)

当`$result`结果集的fetch()方法可以得到一条记录`$row`时,输出`$row['ArtistID'] . "-" . $row['LastName'] . "</br>"`字符串，其中`$row['ArtistID']`代表这条记录里key：ArtistID对应的value；同理`$row['LastName']`代表这条记录里key：LastName对应的value

将连接对象设为null：释放资源，关闭连接

*****

#### exercise7.2 screenshot

![exercise7.2.1](https://tva1.sinaimg.cn/large/007S8ZIlly1gffglui1lnj312y09smxy.jpg)

![exercise7.2.2](https://tva1.sinaimg.cn/large/007S8ZIlly1gffglxfsdpj31300s2wnk.jpg)

***MySQLi访问数据库***：使用了过程式风格：通过主机、用户、密码、数据库名连接数据库，创建连接对象

`if (mysqli_connect_errno()){die(mysqli_connect_error());}`处理错误

通过`$result = mysqli_query($connection,$sql)`得到查询结果集`$result`(在表Genre里查询以genreName排序的所有记录)

如果`$result`存在，当`$row = mysqli_fetch_assoc($result)`可以得到`$result`的一条关联记录时，输出

```
echo '<option value ="' . $row['GenreID'] . '">';
echo $row['GenreName'];
echo "</option>";
```

因为php语句存在于`<select>`标签内，php输出语句将作为select的选项`<option>`,其中选项内容为`$row['GenreName']`代表这条记录里key：GenreName对应的value

*****

#### exercise8 screenshot

![exercise8](https://tva1.sinaimg.cn/large/007S8ZIlly1gffgm8cp9zj31da0u0e81.jpg)

***`function outputArtists()`***:控制左侧的链接栏的输出和跳转

> `$result`是查询以Lastname排序顺序的前三十个Artists的结果集，当结果集有记录时，输出：
>
> ```
> echo '<a href="' . $_SERVER["SCRIPT_NAME"] . '?id=' . $row['ArtistID'] . '" class="';
> if (isset($_GET['id']) && $_GET['id'] == $row['ArtistID']) echo 'active ';
> echo 'item">';
> echo $row['LastName'] . '</a>';
> ```
>
> php中`<a>`通过**链接地址+?act=act对应的想要传的值**在链接点击时实现传值；用`$_GET['act']`接收这个想要传的值（其中`$_SERVER["SCRIPT_NAME"]`得到当前脚本的地址）；
>
> 当`$_GET['id']`有值，并且对应当前点击的ArtistID对应的value，会输出active，使`<a>`的类名从‘item’变为‘active item’；
>
> 最后，左侧链接的文本内容将是LastName对应的value

***`function outputPaintings()`***:控制左侧链接被点击后，右侧结果的改变

> 当`$_GET['id']`存在并大于零时：
>
> ```
> $sql = 'select * from Paintings where ArtistId=' . $_GET['id'];
> $result = $pdo->query($sql);
> while ($row = $result->fetch()) {
>     outputSinglePainting($row);
> }
> ```
>
> `$result`得到的查询表结果为：在表Paintings里与点击左侧链接时传递的ArtistID对应的所有记录
>
> 并对一条记录执行带参函数`function outputSinglePainting($row)`

***`function outputSinglePainting($row)`***:控制右侧每个图片板块图片、标题、描述的输出

> ```
> echo '<div class="item">';
> echo '<div class="image">';
> echo '<img src="images/art/works/square-medium/' .$row['ImageFileName'] .'.jpg">';
> echo '</div>';
> echo '<div class="content">';
> echo '<h4 class="header">';
> echo $row['Title'];
> echo '</h4>';
> echo '<p class="description">';
> echo $row['Excerpt'];
> echo '</p>';
> echo '</div>'; // end class=content
> echo '</div>'; // end class=item
> ```
>
> html逻辑为类为item的<div>中装有类为image（放图片img）、类为content（装有放标题类为header的<h4>、放描述类为description的<p>)的两个<div>
>
> 图片地址为`'images/art/works/square-medium/' .$row['ImageFileName'] . 'jpg'`，其中`$row['ImageFileName']`是当前记录key：ImageFileName对应的value；图片标题为当前记录key：Title对应的value；图片描述为当前记录key：Excerpt对应的value

*****

#### exercise9

有三种方式来执行SQL语句：

**query()方法**:返回查询结果集（result set）或FALSE，多用于查询语句,返回的是一个PODStatement对象

**exec()方法**:返回执行SQL 语句后受影响的行数,通常用于 INSERT，DELETE和UPDATE语句中

**execute()方法**:通过prepare()方法声明预处理语句，然后通过execute()方法执行查询；通过位置占位符`？`或命名占位符和bindValue()实现绑定

**使用预处理语句的优势**：预编译SQL语句，性能更好，执行更快，需要多次提交情况下性能更好；无须“拼接”SQL 语句，编程更简单；在程序运行前已经进行了预编译，预防绝大多数的SQL注入，安全性更好

*****

####  exercise10 screenshot

![exercise10](https://tva1.sinaimg.cn/large/007S8ZIlly1gffgma8j8wj31560u0u0z.jpg)