create database quanlybanhang;

use quanlybanhang;

/* 1.Tạo 4 bảng và chèn dữ liệu */

insert into cus( cID, cName , cAge)
values(1,'Minh Quan', 10),
      (2,'Ngoc Oanh',20),
      (3,'Hong Ha',50);


insert into ord (oID,cID,oDate,oTotalPrice)
values(1,1,'2006/3/21',null),
      (2,2,'2006/3/23',null),
      (3,1,'2006/3/16',null);

insert into p(pID, pName, pPrice)
values(1,'May Giat',3),
      (2,'Tu Lanh',5),
      (3,'Dieu Hoa',7),
      (4,'Quat',1),
      (5,'Bep Dien',2);

insert into orderde(oID,pID,odQTY)
values(1,1,3),
      (1,3,7),
      (1,4,2),
      (2,1,1),
      (3,1,8),
      (2,5,4),
      (2,3,3);
/* 2.Hiển thị các thông tin  gồm oID, oDate, oPrice của tất cả các hóa đơn trong bảng Order, danh sách phải sắp xếp theo thứ tự ngày tháng, hóa đơn mới hơn nằm trên */

select oID,cID,oDate,oTotalPrice
from ord
order by oDate desc;

/* 3. Hiển thị tên và giá của các sản phẩm có giá cao nhất */

select pName,pPrice
from p
where pPrice = (select max(pPrice) from p);


/* 4.Hiển thị danh sách các khách hàng đã mua hàng, và danh sách sản phẩm được mua bởi các khách đó */

select cus.cName,p.pName
from cus
         join ord on cus.cID = ord.cId
         join orderde on ord.oID = orderde.oId
         join p on p.pID = orderde.pId;

/* 5.Hiển thị tên những khách hàng không mua bất kỳ một sản phẩm nào */

select cus.cName
from cus
         left join ord on ord.cId = cus.cID
where ord.cId is null;

/* 6.Hiển thị chi tiết của từng hóa đơn */

select ord.oID,ord.oDate,orderde.odQTY,p.pName,p.pPrice
from orderde
         join ord on orderde.oId = ord.oID
         join p on orderde.pId = p.pID;

/* 7. Hiển thị mã hóa đơn, ngày bán và giá tiền của từng hóa đơn */

select ord.oID, ord.oDate, sum(orderde.odQTY*p.pPrice) as 'Total'
from orderde
         join ord on orderde.oID = ord.oId
         join p on p.pID = orderde.pId
group by orderde.oId;

