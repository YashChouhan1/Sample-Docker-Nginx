# Use the official Nginx image
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy your frontend files to the Nginx web root directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]