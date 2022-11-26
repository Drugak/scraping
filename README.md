# test-scraping

# Steps for runing.
1. Clone repository 
2. npm i
3. cd test-scraping
4. node index.js

## Test API
[GET] localhost:300/get-product-by-id?productId=take-id-from-db-or-console-log-from-terminal

## Response
{"details":[{"description":" 12th Generation Intel® Core™ i3-1215U Processor (E-cores up to 3.30 GHz P-cores up to 4.40 GHz)","detailsKey":"Processor :"},{"description":" Windows 11 Home 64","detailsKey":"Operating System :"},{"description":" Integrated Intel® UHD Graphics","detailsKey":"Graphics :"},{"description":" 8 GB DDR4-3200MHz (Soldered)","detailsKey":"Memory :"},{"description":" 256 GB SSD M.2 2242 PCIe Gen4 TLC Opal","detailsKey":"Storage :"},{"description":" 13.3\" WUXGA (1920 x 1200), IPS, Anti-Glare, Non-Touch, 45%NTSC, 300 nits, 60Hz","detailsKey":"Display :"},{"description":" 1 Year Courier or Carry-in","detailsKey":"Warranty :"}],"id":"lay0ee6w04lsjtltf3qz","name":"ThinkPad L13 Gen 3","originImageUrl":"https://p4-ofp.static.pub/fes/cms/2022/05/04/5luvbmzbuwrwb5vskeczz53v6mpy8a617355.png"}

## Important 
I have used firebase for db, so please send me your emails, and you will see db structures. 

## DB result example 

### All structure:
<img width="967" alt="image" src="https://user-images.githubusercontent.com/7252343/204093526-efdd68f9-f73a-420d-8734-908b83eadada.png">

### Company structure:
<img width="672" alt="image" src="https://user-images.githubusercontent.com/7252343/204093576-ddd0c587-f5e1-4c3b-8f57-a864707d846f.png">

### Product structure: 
<img width="1249" alt="image" src="https://user-images.githubusercontent.com/7252343/204093613-a52968e1-abdb-4681-9123-ed1a89a3610f.png">

### List of product id's: 
<img width="695" alt="image" src="https://user-images.githubusercontent.com/7252343/204093655-b00d9cbf-1e6d-48d7-9ce2-4e208fcd30d5.png">



