export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-6">
            <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; {year} Gedson.</p>
            </div>
        </footer>
    )
}