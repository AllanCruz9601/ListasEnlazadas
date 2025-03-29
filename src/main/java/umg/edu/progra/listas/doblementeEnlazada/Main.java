package umg.edu.progra.listas.doblementeEnlazada;

public class Main {
	public static void main(String[] args) {
		DoblementeEnlazada lista = new DoblementeEnlazada();

		lista.insertAtEnd(10);
		lista.insertAtEnd(20);
		lista.insertAtEnd(30);
		lista.displayForward(); // 10 <-> 20 <-> 30 <-> null

		lista.insertarDespuesDe(20, 25);
		lista.displayForward(); // 10 <-> 20 <-> 25 <-> 30 <-> null

		System.out.println("Número de nodos: " + lista.contarNodos()); // 4

		System.out.println("Lista invertida:");
		lista.revertir();
		lista.displayForward(); // 30 <-> 25 <-> 20 <-> 10 <-> null
	}
}
