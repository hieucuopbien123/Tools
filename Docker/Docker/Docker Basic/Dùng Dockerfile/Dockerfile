# # Dùng Dockerfile: ở đây ta k chạy hết các lệnh

# docker run -it centos
FROM centos:latest as test

# Chạy các hàm trong terminal của container
# Ta muốn chạy yum update nhưng khi RED HAT công bố CentOS Stream, bản CentOS 8 bị kết thúc vòng đời vào cuối năm 2021, nên sau thời điểm đó khi cập nhật với lệnh yum update có dẫn tới lỗi AppStream. Để khắc phục, ta phải chạy 2 lệnh dưới để chuyển thành CentOS Stream 8:
RUN dnf -y --disablerepo '*' --enablerepo=extras swap centos-linux-repos centos-stream-repos
RUN dnf -y distro-sync
RUN yum update -y 
RUN yum install httpd httpd-tools -y
# Options -p để chỉ tạo ra folder nếu not exist vì nếu exist r mà cố tạo sẽ lỗi
RUN mkdir mkdir -p var/www
RUN mkdir -p var/www/html

# WORKDIR là set thư mục làm việc mặc định container
# Ta còn muốn nó chạy và lắng nghe trên cổng 80 để bên ngoài gọi vào
WORKDIR /var/www/html
EXPOSE 80

# hàm docker cp thành thế này, ta dùng ./test.html vì nó cùng cấp với Dockerfile
# ADD ./test.html /var/www/html/

# Tiến trình mặc định khi chạy container
# Thêm tham số cho ENTRYPOINT thì dùng CMD ngay dưới
ENTRYPOINT [ "httpd" ]
CMD [ "-D", "FOREGROUND" ]

# Entrypoint như kiểu điểm bắt đầu để chạy câu lệnh ý. VD: ENTRYPOINT ["npm"] và CMD ["start"] tức chạy npm start

# Lệnh commit biến nó thành 1 image ta không cần viết mà dùng docker bulid là có
