<script type="text/javascript">
            {
            document.getElementById("submit").onclick=function()
            {
                document.getElementById("table").style.display="block";
                
                var table = document.getElementById("table");
                var row = table.insertRow(-1);
                var fname = row.insertCell(0);
                var lname = row.insertCell(1);
                var lock = row.insertCell(2);
                var emailid = row.insertCell(3);
                var dob = row.insertCell(4);
                var edu = row.insertCell(5);
                var abt = row.insertCell(6);
                fname.innerHTML = document.getElementById("fname").value;
                lname.innerHTML = document.getElementById("lname").value;
                lock.innerHTML = document.getElementById("lock").value;
                emailid.innerHTML = document.getElementById("emailid").value;
                dob.innerHTML = document.getElementById("dob").value;
                edu.innerHTML = document.getElementById("edu").value;
                abt.innerHTML = document.getElementById("abt").value;
                
                return false;
            }
        }
        </script>