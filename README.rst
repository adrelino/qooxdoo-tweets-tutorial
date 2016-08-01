qooxdoo Desktop tutorial "tweets"
=================================

This is my result after going through the `tutorial`_.

.. _tutorial: http://www.qooxdoo.org/current/pages/desktop/tutorials/tutorial-part-1.html

Install
=======

Clone including submodules (qooxdoo is a submodule here).

.. code-block:: bash

    $ git clone --recursive -j8 https://github.com/pcdummy/qooxdoo-tweets-tutorial.git

Build the local development app.

.. code-block:: bash

    $ ./generate.py

Deploy it:

.. code-block:: bash

    $ ./generate.py build
    $ rsync -avP build/ <yourhost>:/var/www/

License
=======

LGPL as all code is from the qooxdoo tutorial
