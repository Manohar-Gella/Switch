import java.awt.*;
import java.awt.event.*;
import java.applet.*;;


public class Applets extends Applet implements ActionListener{
   Button b;
   public void init(){
       b = new Button("Click here");
       b.addActionListener(this);
       add(b);
   }
   public void actionPerformed(ActionEvent ae){
       b.setLabel("Clicked");
   }
   
}
