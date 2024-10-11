FROM node:18
RUN git clone https://github.com/coderxsa/ANITAv2 /root/coderxsa
WORKDIR /root/coderxsa
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#coderxsa
