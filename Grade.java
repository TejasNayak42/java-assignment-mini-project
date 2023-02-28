//8B
import javax.swing.*;                                                    
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Grade extends JFrame {                                      
    private JTextField nameField;
    private JTextField usnField;                                          
    private JTextField marksField;
    private JButton reserveButton;                                        
    private JTextArea ticketArea;                                          

    public Grade() {
        // Set up the GUI components
        JLabel nameLabel = new JLabel("Name:");                      
        nameField = new JTextField(20);
        JLabel usnLabel = new JLabel("USN:");
        usnField = new JTextField(20);
        JLabel marksLabel = new JLabel("Marks:");
        marksField = new JTextField(20);

        reserveButton = new JButton("Enter");                        
        reserveButton.addActionListener(new ActionListener() {            
            @Override
            public void actionPerformed(ActionEvent e) {                  
                String name = nameField.getText();
                String usn = usnField.getText();
                String marks = marksField.getText();
                String grade;
                Integer marks1 = Integer.parseInt(marks);
                if(marks1>=90)
                    grade = "O";
                else if(marks1>=80&&marks1<90)
                    grade = "A+";
                else if(marks1>=70&&marks1<80)
                    grade = "A";
                else if(marks1>=60&&marks1<70)
                    grade = "B+";
                else if(marks1>=50&&marks1<60)
                    grade = "B";
                else if(marks1>=45&&marks1<50)
                     grade = "C";
                else if(marks1>=40&&marks1<45)
                    grade = "D";
                else
                    grade = "F";
               String label = "Name: "+name+ "\nUSN: " + usn + "\nGrade: "+grade+"\n-------------------------------------------------";

                ticketArea.append(label + "\n");
            }
        });

        ticketArea = new JTextArea(10, 80);
        ticketArea.setEditable(false);

        // Set up the layout
        JPanel panel = new JPanel();                   
        panel.add(nameLabel);
        panel.add(nameField);
        
        panel.add(usnLabel);
        panel.add(usnField);
        
        panel.add(marksLabel);
        panel.add(marksField);

        panel.add(reserveButton);

        JScrollPane scrollPane = new JScrollPane(ticketArea);                
        JPanel mainPanel = new JPanel();                                      
        mainPanel.add(panel);
        mainPanel.add(scrollPane);                                            
        // Set up the frame
        setTitle("Student Details");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setContentPane(mainPanel);                                             
        pack();
        setSize(900,260);
        setLocationRelativeTo(null); 
        
        setVisible(true);
    }

    public static void main(String[] args) {
        new Grade();                                                       
    }
}
