import React from 'react';
import Card from 'react-bootstrap/Card';

let s="";
function ViewResult(props) {

    function evaluateString(s) {
        let str = s.split(/[^\d.]/);
        let val = [];
        let b = s.replace(/[0-9.]/g, "");
        str.forEach(a => val.push(a));
        let ans = 0;
        let t = 0;
        for (let i = 0; i < b.length; i++) {
            let c = b.charAt(i);
            switch (c) {
                case '*':
                    if (ans == 0) {
                        ans += parseFloat(val[t]) * parseFloat(val[t + 1]);
                        t += 2;
                    } else {
                        ans *= parseFloat(val[t]);

                        t += 1;
                    }
                    break;
    
                case '/':
                    if (ans == 0) {
                        ans += parseFloat(val[t]) / parseFloat(val[t + 1]);
  
                        t += 2;
                    } else {
                        ans /= parseFloat(val[t]);

                        t += 1;
                    }
                    break;
    
                case '%':
                    if (ans == 0) {
                        ans += parseFloat(val[t]) % parseFloat(val[t + 1]);

                        t += 2;
                    } else {
                        ans %= parseFloat(val[t]);

                        t += 1;
                    }
                    break;
    
                case '+':
                    if (ans == 0) {
                        ans += parseFloat(val[t]);
                        
                        t += 2;
                    } else {
                        ans += parseFloat(val[t]);
                        
                        t += 1;
                    }
                    break;
    
                case '-':
                    if (ans == 0) {
                        ans += parseFloat(val[t]);
                      
                        t += 2;
                    } else {
                        ans -= parseFloat(val[t]);
                        
                        t += 1;
                    }
                    break;
            }
        }
        console.log(ans);
        return ans;
    }
    
    
    
    
    function getValue(){
        if(props.val==="="){
            console.log(evaluateString(s));
        }
        else{
            s+=props.val;
        }
        
    }
    
  return (
    
    <div  onClick={getValue}>
        <Card bg={props.color}>
            <Card.Body>
                <h2>{props.val}</h2>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ViewResult