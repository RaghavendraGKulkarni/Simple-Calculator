function display(ch)
{
    if(ch=='C')
        document.getElementById('display').innerHTML='0';
    else if(ch!='=')
    {
        if(document.getElementById('display').innerHTML=='0')
            document.getElementById('display').innerHTML=ch;    
        else
            document.getElementById('display').innerHTML+=ch;
    }
    else
    {
        let ans=parseFloat(eval(document.getElementById('display').innerHTML));
        document.getElementById('display').innerHTML=ans;
    }
}