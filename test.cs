//This is where it all happens
<html>
   <head>
      <style>
      table{
          border: 1px solid black;
      }
      tr, th, td{
          border:1px solid black;
          
      }
      table, tr, th, td{
          border-collapse: collapse;
      }
      th, td{
          padding:5px;
          text-transform: uppercase;
      }
      th{
           background-color: rgba(0, 167, 0, 0.7)
      }
      table#t101 td: nth-child(even){
        background-color:gray;  
      }
      </style>
   </head>
   <body>
      <table id = "t101">
          <tr>
              <th>Name</th>
              <th>Reg No</th>
              <th>Dept</th>
              <th>Course</th>
          </tr>
          <tr>
              <td>Mere Daniel</td>
              <td>MOUAU/CPM/14/98769</td>
              <td>Computer Science</td>
              <td>Computer Science</td>
          </tr>
          <tr>
               <td>Mere Daniel</td>
              <td>MOUAU/CPM/14/98769</td>
              <td>Computer Science</td>
              <td>Computer Science</td>
          </tr>
          <tr>
               <td>Mere Daniel</td>
              <td>MOUAU/CPM/14/98769</td>
              <td>Computer Science</td>
              <td>Computer Science</td>
          </tr>
          
          
      </table>
   </body>
</html>
