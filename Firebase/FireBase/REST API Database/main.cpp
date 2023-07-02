#include <QCoreApplication>
#include "databasehandler.h"

// # Basic / Firebase database

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    DatabaseHandler dbHandler;

    return a.exec();
}
