const Footer = () => {
  return (
    <section
      className="flex gap-24 p-32 flex-wrap bg-slate-200 dark:bg-gray-800
    transition-colors duration-300 ease-linear text-black dark:text-white text-center md:text-start"
    >
      <div className="flex flex-col gap-8">
        <a href="#">Τρόποι Παραγγελίας</a>
        <a href="#">Τρόποι Αποστολής</a>
        <a href="#">Επιστροφές & αλλαγές</a>
        <a href="#">Τρόποι Πληρωμής</a>
        <a href="#">Προστασία Δεδομένων</a>
        <a href="#">Όροι Χρήσης</a>
        <a href="#">Ρυθμίσεις & Πολιτική</a>
        <a href="#">Cookies</a>
      </div>
      <div className="flex flex-col gap-8">
        <a href="#">Η Εταιρία</a>
        <a href="#">Club 9</a>
        <a href="#">Καταστήματα</a>
        <a href="#">Συχνές Ερωτήσεις</a>
        <a href="#">Newsletter Sign Up</a>
        <a href="#">Εταιρική Πολιτική</a>
      </div>
      <div className="flex flex-col gap-8">
        <a href="#">Επικοινωνία</a>
        <a href="#">Συνεργάτες</a>
        <a href="#">Κεντρικά Γραφεία</a>
        <a href="#">Θέσεις Εργασίας</a>
      </div>
    </section>
  );
};

export default Footer;
