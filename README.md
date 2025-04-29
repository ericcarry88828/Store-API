# Blogging Platform API
Store API is a simple and efficient API project focused on providing read access to product data. This API project implements only the GET method and offers a variety of filtering and sorting functionalities, allowing users to flexibly retrieve the desired product information.

NOTE: This project does not implement a frontend client. The backend web service sends/recieves posts in JSON form. 

## Features
The RESTful API allows users to perform the following operations:
- Sort products by fields such as name, price, featured status, rating, creation date, and company.
- Display specific fields according to user preference.
- Limit the number of records returned in a query.
- Implement pagination to efficiently manage large datasets.
- Use comparison operators to filter products by price or rating range.

## Deployment
### Local
 - Clone the repository:
 ```
git clone https://github.com/ericcarry88828/Store-API.git
```
- Navigate into the directory:
```
cd Store-API
```
- Configure the `.env` file:
```
- Open the `.env` file in your preferred text editor.
- Set the `MONGO_URI` variable to point to your local MongoDB instance. For example:
  MONGO_URI=mongodb://127.0.0.1:27017/your-database-name
```
- Install dependencies:
```
npm install
```
- Start the application:
```
npm start
```

### Docker
 - Clone the repository:
```
git clone https://github.com/ericcarry88828/Store-API.git
```
- Navigate into the directory:
```
cd Store-API
```
- Start the application using Docker:
```
docker compose up
```

- **Important:** If you have changed the MongoDB service name in your `docker-compose.yml`, make sure to update the hostname in the `MONGO_URI`. For example, if the service name is changed to `my-mongo`, set:
    MONGO_URI=mongodb://my-mongo:27017/your-database-name


## Examples

```http
  GET /api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Filter results based on the name field. You can specify part of a name to find matching entries. |
| `sort` | `string` | Sort the results based on a field. Prefix with a minus sign (`-`) for descending order.<br>`field`: name, price, featured, rating, company|
| `select` | `string` | Specifies the fields to display in the response.<br>`field`: name, price, featured, rating, company|
| `page` | `int` | The page number of the results to retrieve.|
| `limit` | `int` | The maximum number of results to return per page.|
| `featured` | `boolean` | `tru` or `false`|
| `numericFilters` | `operator` | `operator`: <, <=, =>, >, =<br>`field`: price, rating |
