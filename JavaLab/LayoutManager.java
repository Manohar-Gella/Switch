import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
// 12th expreiment Layout managers in java

class LayoutManager extends JFrame implements ActionListener{
   JButton jb;
   JLabel jl;
   LayoutManager(){
       setSize(500, 300);
       setTitle("Layout Manager Demo");
       setLayout(new FlowLayout());


       jb = new JButton("Click here");
       jl = new JLabel();
       add(jb);
       add(jl);
       jb.addActionListener(this);
       setVisible(true);
       setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);


   }


   public void actionPerformed(ActionEvent ae){
       jl.setText("Button is click");


   }


   public static void main(String[] args) {
       new LayoutManager();
   }


}


