# docker run -it centos
FROM centos:latest as test

# chạy các hàm trong terminal của container
RUN yum update -y
RUN yum install httpd httpd-tools -y
RUN mkdir var/www
RUN mkdir var/www/html

# WORKDIR là set thư mục làm việc mặc định container
# Ta còn muốn nó chạy và lắng nghe trên cổng 80
WORKDIR /var/www/html
EXPOSE 80

# hàm docker cp thành thế này, ta dùng ./test.html vì nó cùng cấp với Dockerfile
# ADD ./test.html /var/www/html/

# tiến trình mặc định khi chạy container
# thêm tham số cho ENTRYPOINT thì dùng CMD ngay dưới
ENTRYPOINT [ "httpd" ]
CMD [ "-D", "FOREGROUND" ]

# lệnh commit ta không cần viết mà dùng docker bulid là có